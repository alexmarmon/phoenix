#!/usr/bin/env babel

const MOD = ['ctrl', 'alt', 'cmd'];
const MOD_S = [...MOD, 'shift'];
const VERBOSE = true;
const HALF_CORRECTION = 6; // Fix padding issues for half screen windows

const scr = Screen.main().flippedVisibleFrame();
// Padding Values
const paddingTop = 43;
const paddingLeft = 15;
const paddingRight = 15;
const paddingBottom = 40;
const paddingCenter = 10;
const paddingMiddle = 20;
// Computed sizes
const halfWidth = ((scr.width - paddingLeft) - paddingRight) / 2;
const halfHeight = (((scr.height - paddingTop) - paddingBottom) / 2) + HALF_CORRECTION;
const thirdWidth = ((scr.width - paddingLeft) - paddingRight) / 3;

const movementModal = (message, override = false) => {
  window = Window.focused();
  screen = Screen.main().flippedVisibleFrame();

  Modal.build({
    origin(modal) {
      return {
        x: (screen.width / 2) - (modal.width / 2),
        y: (screen.height / 2)
      }
    },
    weight: 20,
    duration: 1,
    appearance: 'dark',
    icon: window.app().icon(),
    text: override ? message + ' ' + window.app().name() : 'Moving ' + window.app().name() + ' to the ' + message
  }).show();
}

const windowLocations = {
  full: {
    y: paddingTop,
    x: paddingLeft,
    width: scr.width - paddingRight - paddingLeft,
    height: scr.height - paddingBottom
  },
  left: {
    y: paddingTop,
    x: paddingLeft,
    width: halfWidth - paddingCenter,
    height: scr.height - paddingBottom
  },
  right: {
    y: paddingTop,
    x: (halfWidth + paddingLeft) + paddingCenter,
    width: halfWidth,
    height: scr.height - paddingBottom
  },
  rightTwoThirds: {
    y: paddingTop,
    x: (thirdWidth + paddingLeft) + paddingCenter,
    width: thirdWidth * 2,
    height: scr.height - paddingBottom
  },
  leftTwoThirds: {
    y: paddingTop,
    x: paddingLeft,
    width: (thirdWidth * 2) - paddingCenter,
    height: scr.height - paddingBottom
  },
  leftThird: {
    y: paddingTop,
    x: paddingLeft,
    width: thirdWidth - paddingCenter,
    height: scr.height - paddingBottom
  },
  rightThird: {
    y: paddingTop,
    x: ((thirdWidth * 2) + paddingLeft) + paddingCenter,
    width: thirdWidth,
    height: scr.height - paddingBottom
  }
}