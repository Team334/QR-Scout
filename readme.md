# QR-Scout <sub>otherwise known as LARS</sub> (at least for now)

### Info:
A QR based Scouting system for FRC. Made for mobile web.

### Requirements
	Scanning codes: 
		A. Must be on Firefox for android
			or
		B. Have SSL cert. on domain (and then can be used on any browser)



### Outside Libraries Used:
[WebCodeCam](https://github.com/andrastoth/WebCodeCam) for QR scanning. 
[qrcodejs](https://github.com/davidshimjs/qrcodejs) for QR code creation. 

### Changelog:
- Changed Folder names to fix [issue] (https://github.com/Team334/QR-Scout/issues/1) **2/13/16**
- Added items from [protected] (https://github.com/Team334/QR-Scout/tree/master/protected) folder that are nonsensitive **2/13/16** 
- Minor Css Changes || Started Work on collect data page || Collect.js changes (functions added) || Continued Work on collect data page **2/15/16**
- Everything kinda changed. Been awhile since a commit || major work on Collect pages and login moved to Google Sign in to get ready for open source release **2/25/16**
- Collect.html is done! || Work on compression of data for QR code generation || Update: Data encoding and QR generation done || Added pit scouting option **2/27/16**

### To Do list:
	-Create Decoder for QR codes
		-If the same code is scanned twice then do not display data 
	-Write js code for collect page

**Special thanks to [Kevin](https://github.com/furryfaust)**