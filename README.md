# Select-(as per)-Config-and-Launch-Player (SCALP)

## How to run in development mode

1. Get a Raspberry Pi 2 and a fresh Micro SD card (8gb is enough)

2. Get a copy of [Raspbian](https://www.raspberrypi.org/downloads/)
  * We will use the easy installer for Raspbian which is called `NOOBS`.
  * Tested version = 2.8.2 (Offline and network install)
    * [Download link](https://downloads.raspberrypi.org/NOOBS_latest)

3. Once you've downloaded the NOOBS zip file, you'll need to copy the contents to the formatted SD card on your computer.

4. To set up a blank SD card with NOOBS:

  * Format an SD card which is 8GB or larger as FAT. See the instructions given below.
  Note: If you're formatting an SD (or micro SD) card that has a capacity over 32GB (i.e. 64GB and above), then see the separate SDXC formatting instructions.

    * **WINDOWS**
      * If you are a Windows user, we recommend formatting your SD card using the SD Association's Formatting Tool, which can be downloaded from [sdcard.org](https://www.sdcard.org/downloads/formatter_4/). Instructions for using the tool are available on the same site.

    * **MAC OS**
      * The [SD Association's Formatting Tool](https://www.sdcard.org/downloads/formatter_4/) is also available for Mac users, although the default OS X Disk Utility is also capable of formatting the entire disk. To do this, select the SD card volume and choose Erase with MS-DOS format.

    * **LINUX**
      * For Linux users we recommend gparted (or the command line version  parted). Norman Dunbar has written up [instructions](http://qdosmsq.dunbar-it.co.uk/blog/2013/06/noobs-for-raspberry-pi/) for Linux users.

  * Download and extract the files from the NOOBS zip file.

  * Copy the extracted files onto the SD card that you just formatted, so that this file is at the root directory of the SD card. Please note that in some cases it may extract the files into a folder; if this is the case, then please copy across the files from inside the folder rather than the folder itself.

  * On first boot, the "RECOVERY" FAT partition will be automatically resized to a minimum, and a list of OSes that are available to install will be displayed.

  * You can find further instructions for this step at [NOOBS](https://www.raspberrypi.org/documentation/installation/noobs.md) website.

5. Setup your Raspberry Pi 2
  * Insert the micro SD in the board
    * ![connecting_microsd](./READMEImages/connecting_microsd.png)
  * Connect a keyboard, mouse, ethernet cable and  A/C power supply
    * ![connecting_others](./READMEImages/connecting_others1.png)
    * ![connecting_others](./READMEImages/connecting_others2.png)
  * Turn on your monitor and you should see a setup screen like the following:
    * ![setup_screen](./READMEImages/setup_screen.png)
    * Select `Raspbian [RECOMMENDED]` and click on the `Install` button
    * ![setup_screen1](./READMEImages/setup_screen1.png)
    * Click on the `Yes` button, and you should see the following screens next:
    * ![setup_screen2](./READMEImages/setup_screen2.png)
    * ![setup_screen3](./READMEImages/setup_screen3.png)
    * After that you should select and language preferences and Raspbian will be fully functional
    * ![setup_screen4](./READMEImages/setup_screen4.png)

6. Check Raspberry Pi 2 internet connection and install required packages
  * To check your internet connection open the `Terminal` application (left upper corner) and enter the command `ping 8.8.8.8`. You should see the following result:
  * ![checking_internet_connection](./READMEImages/checking_internet_connection.png)  
  * After that type the following commands one at a time:
    * `sudo apt-get update`
    * `sudo apt-get install oracle-java8-jdk`
    * `sudo apt-get install at`
      * If it asks for permission, type `Y` for `Yes`

7. Setup `SCALP` files
  * `cd /home/pi`
  * `git clone https://github.com/PiETLab/SCALP`
  * `mv SCALP/* .`
    * Moving files from the `SCALP` folder to `/home/pi`
  * `mv enamel.desktop .config/autostart/`
  * `sudo mv enamel_usb_autostart.rules /etc/udev/rules.d/`
