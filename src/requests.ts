export namespace requests {
  export const INTENT = "IntentRequest";

  export const LAUNCH = "LaunchRequest";

  export const SESSION_ENDED = "SessionEndedRequest";

  export const SYSTEM_EXCEPTION = "System.ExceptionEncountered";

  export namespace AudioPlayer {
    export const FAILED = "AudioPlayer.PlaybackFailed";
    export const FINISHED = "AudioPlayer.PlaybackFinished";
    export const NEARLY_FINISHED = "AudioPlayer.PlaybackNearlyFinished";
    export const STARTED = "AudioPlayer.PlaybackStarted";
    export const STOPPED = "AudioPlayer.PlaybackStopped";
  }

  export namespace PlaybackController {
    export const NEXT = "PlaybackController.NextCommandIssued";
    export const PAUSE = "PlaybackController.PauseCommandIssued";
    export const PLAY = "PlaybackController.PlayCommandIssued";
    export const PREVIOUS = "PlaybackController.PreviousCommandIssued";
  }
}
