var usbDetect = require('usb-detection');
const drivelist = require('drivelist');
let currentDrives = [];

drivelist.list((error, drives) => {
  if (error) {
    throw error;
  }

  drives.forEach((drive) => {
    console.log(drive);
  });

  currentDrives = drives;
  usbDetect.startMonitoring();
});

// Detect add/insert
usbDetect.on('add', (device) => {
  setTimeout(() => {
    drivelist.list((error, drives) => {
      if (error) {
        throw error;
      }

      drives.forEach((drive) => {
        if (device.isUSB() && drive.description === (device.manufacturer + " " + device.deviceName)) {
          // New device
        }
      });
    });
  }, 10000);
});

// Detect remove
usbDetect.on('remove', (device) => {
  setTimeout(() => {
    drivelist.list((error, drives) => {
      if (error) {
        throw error;
      }
      currentDrives = drives;
    })
  }, 10000);
});

// Allow the process to exit
//usbDetect.stopMonitoring()
