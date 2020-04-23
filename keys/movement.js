#!/usr/bin/env babel

Key.on('h', MOD, () => {
  if (VERBOSE) movementModal('left half');
  Window.focused().setFrame(windowLocations.left);
});

Key.on('l', MOD, () => {
  if (VERBOSE) movementModal('right half');
  Window.focused().setFrame(windowLocations.right);
});

Key.on('k', MOD, () => {
  if (VERBOSE) movementModal('right two-thirds');
  Window.focused().setFrame(windowLocations.rightTwoThirds);
});

Key.on('j', MOD, () => {
  if (VERBOSE) movementModal('left two-thirds');
  Window.focused().setFrame(windowLocations.leftTwoThirds);
});

Key.on('u', MOD, () => {
  if (VERBOSE) movementModal('left third');
  Window.focused().setFrame(windowLocations.leftThird);
});

Key.on('i', MOD, () => {
  if (VERBOSE) movementModal('right third');
  Window.focused().setFrame(windowLocations.rightThird);
});

Key.on('m', MOD, () => {
  if (VERBOSE) movementModal('Maximizing', true);
  Window.focused().setFrame(windowLocations.full);
});

Key.on('n', MOD, () => {
  if (VERBOSE) movementModal('Resizing & Centering', true);
  const width = scr.width - (scr.width * .15);
  const height = scr.height - (scr.height * .2);
  Window.focused().setFrame({
    x: scr.x + (scr.width / 2) - (width / 2),
    y: scr.y + (scr.height / 2) - (height / 2),
    width,
    height,
  });
})


Key.on('v', MOD, () => {
  if (VERBOSE) movementModal('Resizing & Centering', true);
  const screenEdgeGap = scr.width * .05;
  const windowsGap = scr.width * .005;
  const width = ((scr.width - (screenEdgeGap * 2)) * .7) - windowsGap;
  const height = scr.height - (scr.height * .2);
  Window.focused().setFrame({
    // x: (scr.x + (scr.width / 2) - (width / 2)) - (scr.width * .15),
    x: scr.x + screenEdgeGap,
    y: scr.y + (scr.height / 2) - (height / 2),
    width,
    height,
  });
})

Key.on('b', MOD, () => {
  if (VERBOSE) movementModal('Resizing & Centering', true);
  const screenEdgeGap = scr.width * .05;
  const widthOfV = (scr.width - (screenEdgeGap * 2)) * .7;
  const width = ((scr.width - (screenEdgeGap * 2)) * .3); 

  const height = scr.height - (scr.height * .2);
  Window.focused().setFrame({
    x: scr.x + screenEdgeGap + widthOfV,
    y: scr.y + (scr.height / 2) - (height / 2),
    width,
    height,
  });
})


Key.on('c', MOD, () => {
  if (VERBOSE) movementModal('Centering', true);
  Window.focused().setTopLeft({
    x: scr.x + (scr.width / 2) - (window.frame().width / 2),
    y: scr.y + (scr.height / 2) - (window.frame().height / 2)
  });
})
