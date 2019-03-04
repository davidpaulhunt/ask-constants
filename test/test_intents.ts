import "mocha";

import { expect } from "chai";

import { intents } from "../src";

describe("intents.AMAZON", () => {
  it("CANCEL should equal 'AMAZON.CancelIntent'", () => {
    expect(intents.AMAZON).to.have.property("CANCEL", "AMAZON.CancelIntent");
  });
  it("FALLBACK should equal 'AMAZON.FallbackIntent'", () => {
    expect(intents.AMAZON).to.have.property("FALLBACK", "AMAZON.FallbackIntent");
  });
  it("HELP should equal 'AMAZON.HelpIntent'", () => {
    expect(intents.AMAZON).to.have.property("HELP", "AMAZON.HelpIntent");
  });
  it("LOOP_OFF should equal 'AMAZON.LoopOffIntent'", () => {
    expect(intents.AMAZON).to.have.property("LOOP_OFF", "AMAZON.LoopOffIntent");
  });
  it("LOOP_ON should equal 'AMAZON.LoopOnIntent'", () => {
    expect(intents.AMAZON).to.have.property("LOOP_ON", "AMAZON.LoopOnIntent");
  });
  it("MORE should equal 'AMAZON.MoreIntent'", () => {
    expect(intents.AMAZON).to.have.property("MORE", "AMAZON.MoreIntent");
  });
  it("NAVIGATE_HOME should equal 'AMAZON.NavigateHomeIntent'", () => {
    expect(intents.AMAZON).to.have.property("NAVIGATE_HOME", "AMAZON.NavigateHomeIntent");
  });
  it("NAVIGATE_SETTINGS should equal 'AMAZON.NavigateSettingsIntent'", () => {
    expect(intents.AMAZON).to.have.property("NAVIGATE_SETTINGS", "AMAZON.NavigateSettingsIntent");
  });
  it("NEXT should equal 'AMAZON.NextIntent'", () => {
    expect(intents.AMAZON).to.have.property("NEXT", "AMAZON.NextIntent");
  });
  it("NO should equal 'AMAZON.NoIntent'", () => {
    expect(intents.AMAZON).to.have.property("NO", "AMAZON.NoIntent");
  });
  it("PAGE_DOWN should equal 'AMAZON.PageDownIntent'", () => {
    expect(intents.AMAZON).to.have.property("PAGE_DOWN", "AMAZON.PageDownIntent");
  });
  it("PAGE_UP should equal 'AMAZON.PageUpIntent'", () => {
    expect(intents.AMAZON).to.have.property("PAGE_UP", "AMAZON.PageUpIntent");
  });
  it("PAUSE should equal 'AMAZON.PauseIntent'", () => {
    expect(intents.AMAZON).to.have.property("PAUSE", "AMAZON.PauseIntent");
  });
  it("PREVIOUS should equal 'AMAZON.PreviousIntent'", () => {
    expect(intents.AMAZON).to.have.property("PREVIOUS", "AMAZON.PreviousIntent");
  });
  it("REPEAT should equal 'AMAZON.RepeatIntent'", () => {
    expect(intents.AMAZON).to.have.property("REPEAT", "AMAZON.RepeatIntent");
  });
  it("RESUME should equal 'AMAZON.ResumeIntent'", () => {
    expect(intents.AMAZON).to.have.property("RESUME", "AMAZON.ResumeIntent");
  });
  it("SCROLL_DOWN should equal 'AMAZON.ScrollDownIntent'", () => {
    expect(intents.AMAZON).to.have.property("SCROLL_DOWN", "AMAZON.ScrollDownIntent");
  });
  it("SCROLL_LEFT should equal 'AMAZON.ScrollLeftIntent'", () => {
    expect(intents.AMAZON).to.have.property("SCROLL_LEFT", "AMAZON.ScrollLeftIntent");
  });
  it("SCROLL_RIGHT should equal 'AMAZON.ScrollRightIntent'", () => {
    expect(intents.AMAZON).to.have.property("SCROLL_RIGHT", "AMAZON.ScrollRightIntent");
  });
  it("SCROLL_UP should equal 'AMAZON.ScrollUpIntent'", () => {
    expect(intents.AMAZON).to.have.property("SCROLL_UP", "AMAZON.ScrollUpIntent");
  });
  it("SELECT should equal 'AMAZON.SelectIntent'", () => {
    expect(intents.AMAZON).to.have.property("SELECT", "AMAZON.SelectIntent");
  });
  it("SHUFFLE_OFF should equal 'AMAZON.ShuffleOffIntent'", () => {
    expect(intents.AMAZON).to.have.property("SHUFFLE_OFF", "AMAZON.ShuffleOffIntent");
  });
  it("SHUFFLE_ON should equal 'AMAZON.ShuffleOnIntent'", () => {
    expect(intents.AMAZON).to.have.property("SHUFFLE_ON", "AMAZON.ShuffleOnIntent");
  });
  it("START_OVER should equal 'AMAZON.StartOverIntent'", () => {
    expect(intents.AMAZON).to.have.property("START_OVER", "AMAZON.StartOverIntent");
  });
  it("STOP should equal 'AMAZON.StopIntent'", () => {
    expect(intents.AMAZON).to.have.property("STOP", "AMAZON.StopIntent");
  });
  it("YES should equal 'AMAZON.YesIntent'", () => {
    expect(intents.AMAZON).to.have.property("YES", "AMAZON.YesIntent");
  });
});
