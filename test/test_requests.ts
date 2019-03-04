import "mocha";

import { expect } from "chai";

import { requests } from "../src";

describe("requests", () => {
  it("INTENT should equal 'IntentRequest'", () => {
    expect(requests).to.have.property("INTENT", "IntentRequest");
  });

  it("LAUNCH should equal 'LaunchRequest'", () => {
    expect(requests).to.have.property("LAUNCH", "LaunchRequest");
  });

  it("SESSION_ENDED should equal 'SessionEndedRequest'", () => {
    expect(requests).to.have.property("SESSION_ENDED", "SessionEndedRequest");
  });

  it("SYSTEM_EXCEPTION should equal 'System.ExceptionEncountered'", () => {
    expect(requests).to.have.property("SYSTEM_EXCEPTION", "System.ExceptionEncountered");
  });

  it("should have property 'AudioPlayer'", () => {
    expect(requests)
      .to.have.property("AudioPlayer")
      .that.is.an("object");
  });

  it("should have property 'PlaybackController'", () => {
    expect(requests)
      .to.have.property("PlaybackController")
      .that.is.an("object");
  });

  describe("AudioPlayer", () => {
    it("FAILED should equal 'AudioPlayer.PlaybackFailed'", () => {
      expect(requests.AudioPlayer).to.have.property("FAILED", "AudioPlayer.PlaybackFailed");
    });
    it("FINISHED should equal 'AudioPlayer.PlaybackFinished'", () => {
      expect(requests.AudioPlayer).to.have.property("FINISHED", "AudioPlayer.PlaybackFinished");
    });
    it("NEARLY_FINISHED should equal 'AudioPlayer.PlaybackNearlyFinished'", () => {
      expect(requests.AudioPlayer).to.have.property(
        "NEARLY_FINISHED",
        "AudioPlayer.PlaybackNearlyFinished"
      );
    });
    it("STARTED should equal 'AudioPlayer.PlaybackStarted'", () => {
      expect(requests.AudioPlayer).to.have.property("STARTED", "AudioPlayer.PlaybackStarted");
    });
    it("STOPPED should equal 'AudioPlayer.PlaybackStopped'", () => {
      expect(requests.AudioPlayer).to.have.property("STOPPED", "AudioPlayer.PlaybackStopped");
    });
  });

  describe("PlaybackController", () => {
    it("NEXT should equal 'PlaybackController.NextCommandIssued'", () => {
      expect(requests.PlaybackController).to.have.property(
        "NEXT",
        "PlaybackController.NextCommandIssued"
      );
    });
    it("PAUSE should equal 'PlaybackController.PauseCommandIssued'", () => {
      expect(requests.PlaybackController).to.have.property(
        "PAUSE",
        "PlaybackController.PauseCommandIssued"
      );
    });
    it("PLAY should equal 'PlaybackController.PlayCommandIssued'", () => {
      expect(requests.PlaybackController).to.have.property(
        "PLAY",
        "PlaybackController.PlayCommandIssued"
      );
    });
    it("PREVIOUS should equal 'PlaybackController.PreviousCommandIssued'", () => {
      expect(requests.PlaybackController).to.have.property(
        "PREVIOUS",
        "PlaybackController.PreviousCommandIssued"
      );
    });
  });
});
