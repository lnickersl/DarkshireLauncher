// ====== LAUNCHER CONFIG ====== //
var config = {
    dir: "DarkshireRP", // Launcher directory
    title: "Darkshire RP", // Window title
    icons: [ "favicon.png" ], // Window icon paths

    // Auth config
    newsURL: "https://vk.com/@darkshire-osnovnye-polozheniya", // News WebView URL

    linkVk: {
      text: "vk",
      url: new java.net.URL("https://vk.com/darkshire"),
    },
    
    linkYoutube: {
      text: "Youtube",
      url: new java.net.URL("https://www.youtube.com/"),
    },

    linkDiscord: {
      text: "Discord",
      url: new java.net.URL("https://www.google.com/"),
    },

    // Settings defaults
    settingsMagic: 0xC0DE5, // Ancient magic, don't touch
    autoEnterDefault: false, // Should autoEnter be enabled by default?
    fullScreenDefault: false, // Should fullScreen be enabled by default?
    ramDefault: 2048 // Default RAM amount (0 for auto)
};

// ====== DON'T TOUCH! ====== //
var dir = IOHelper.HOME_DIR.resolve(config.dir);
if (JVMHelper.OS_TYPE == JVMHelperOS.MUSTDIE)
{
    dir = IOHelper.HOME_DIR_WIN.resolve(config.dir);
}
if (!IOHelper.isDir(dir)) {
    java.nio.file.Files.createDirectory(dir);
}
var defaultUpdatesDir = dir.resolve("updates");
if (!IOHelper.isDir(defaultUpdatesDir)) {
    java.nio.file.Files.createDirectory(defaultUpdatesDir);
}
