import { AppCommand, CommandResult, ErrorCodes, failure, help, success, shortName, longName, required, hasArg} from "../../../util/commandline";
import { MobileCenterClient, models, clientRequest } from "../../../util/apis";
import { out } from "../../../util/interaction";
import { inspect } from "util";
import * as _ from "lodash";

const debug = require("debug")("mobile-center-cli:commands:distribute:releases:show");

@help("Shows full details about release")
export default class ShowReleaseDetailsCommand extends AppCommand {
  @help("Release ID")
  @shortName("r")
  @longName("release-id")
  @required
  @hasArg
  public releaseId: string;

  public async run(client: MobileCenterClient): Promise<CommandResult> {
    const app = this.app;

    const releaseId = Number(this.releaseId);
    if (!Number.isSafeInteger(releaseId) || releaseId <= 0) {
      return failure(ErrorCodes.InvalidParameter, `${this.releaseId} is not a valid release id`);
    }

    let releaseDetails: models.ReleaseDetails;
    try {
      debug("Loading release details");
      const httpRequest = await out.progress("Loading release details...", clientRequest<models.ReleaseDetails>(
        (cb) => client.releases.getLatestByUser(this.releaseId, app.ownerName, app.appName, cb)
      ));
      if (httpRequest.response.statusCode >= 400) {
        throw httpRequest.response.statusCode;
      } else {
        releaseDetails = httpRequest.result;
      }
    } catch (error) {
      if (error === 404) {
        return failure(ErrorCodes.InvalidParameter, `release ${this.releaseId} doesn't exist`);
      } else {
        debug(`Failed to load release details - ${inspect(error)}`);
        return failure(ErrorCodes.Exception, "failed to load release details");
      }
    }

    out.report([
      ["ID", "id"],
      ["Status", "status"],
      ["Name", "appName"],
      ["Display Name", "appDisplayName"],
      ["Version", "version"],
      ["Short Version", "shortVersion"],
      ["Release Notes", "releaseNotes"],
      ["Provisioning Profile Name", "provisioningProfileName"],
      ["Size", "size"],
      ["OS Required", "minOs"],
      ["Android API Required", "androidMinApiLevel"],
      ["Bundle Identifier", "bundleIdentifier"],
      ["Fingerprint", "fingerprint"],
      ["Uploaded At", "uploadedAt", out.report.asDate],
      ["Download URL", "downloadUrl"],
      ["Icon URL", "appIconUrl"],
      ["Install URL", "installUrl"],
      ["Distribution Group", "distributionGroups", (distributionGroups: models.DistributionGroup[]) => _.get(distributionGroups, "[0].name", "")]
    ], releaseDetails);
   
    return success();
  }
}
