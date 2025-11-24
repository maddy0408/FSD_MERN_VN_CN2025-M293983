function downloadFile(filename, callback) {
  setTimeout(() => {
    console.log(`Downloading ${filename}...`);
    callback();
  }, 2000);
}

function onDownloadComplete() {
  console.log("Download complete!");
}


downloadFile("bellie_jeans.mp3", onDownloadComplete);
