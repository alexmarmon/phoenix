#!/usr/bin/env babel

Key.on('a', MOD, () => {
  if (VERBOSE) movementModal('Centering all', true);
  const windows = Window.all({ visible: true });
  _.forEach(windows, (window) => {
    window.setTopLeft({
      x: scr.x + (scr.width / 2) - (window.frame().width / 2),
      y: scr.y + (scr.height / 2) - (window.frame().height / 2)
    });
  })
});