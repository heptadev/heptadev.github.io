'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "46b164141af51ad0bcbd6ebf209724f7",
"/": "46b164141af51ad0bcbd6ebf209724f7",
"assets/AssetManifest.json": "385e9889e5e29eaf63ee782e09d211d2",
"assets/shaders/ink_sparkle.frag": "4042bb3cfacbf2abcbe489d328c9c5bb",
"assets/assets/twitter-156-512.png": "5c8962d313784c0252e2256be896883d",
"assets/assets/instagram-70-512.png": "6411128d1d33d19722a151d345eeeb16",
"assets/assets/Line%25206.png": "ff7dda51bcfd79510cbada7cc9a91f03",
"assets/assets/worldmap.png": "0258e23d651aa88a6d6d098debeb8fbc",
"assets/assets/Financial.png": "67fbbff0526a83567d283c072ddd49f1",
"assets/assets/close.png": "726335922a26f0e95ee26de8dda5c87e",
"assets/assets/93344-money-investment.json": "f9bef558c1888745d08955c964c19b80",
"assets/assets/33532-guru-financial.json": "acec1bb798d9f8c7739530430031361f",
"assets/assets/biglogo.png": "7d361f889ad9cf6e07b1361f169edd7b",
"assets/assets/eurburn.png": "55ee0f0905ab915b675ada8fe9033015",
"assets/assets/logodef.png": "3e79c6d9a54e5eaa3ba14c50ffafae2d",
"assets/assets/loginpage.png": "76b08bacda2d6468c0eb49fd6af4fdf9",
"assets/assets/backk.png": "6107be5f1efe487460e7ecd9cbb22816",
"assets/assets/smallLogo.png": "b813ac6a057425681469f02d093bc94c",
"assets/assets/quotes.png": "f44e84bb543116659ecb23cce884a1cb",
"assets/assets/facebook-130-512.png": "97f5b0a2f8d0333744f41a4f38f498a0",
"assets/assets/piggywall.png": "d5a5fed07837f143dc4f61d9d0416d94",
"assets/assets/bulb.png": "33143e37f5d79aa592993f4258f2a05e",
"assets/assets/Intelligence.png": "d6ef00fb1e0675362c86229a94f401e9",
"assets/assets/lottie/88425-multiple-spinning-dotted-rings-loading.json": "e8d8c3311edd1111c9482ab20eb49ed9",
"assets/assets/lottie/87795-loading-success.json": "8011b3f9d665914db4f9744932187d54",
"assets/assets/lottie/80024-check-animation.json": "cd503a95da0a3658e4a8419561043eb3",
"assets/assets/lottie/94910-greenish-arrow-down.json": "8096a2848683163c01d6079abaaa7a85",
"assets/assets/lottie/95147-rocket.json": "e1c193ea0cc9e96a4702015576ddd985",
"assets/assets/lottie/99225-box-rotating.json": "aaad6b1840356244dc70aab7d3807775",
"assets/assets/lottie/96181-rubiks-cube.json": "1f0332ef48533cc78bac4d4d3eece23c",
"assets/assets/lottie/96489-top-badge-animation.json": "cc7373450f4974e3717757b0c7c29ac7",
"assets/assets/lottie/82362-green-loading-dots.json": "3e2bae182b187f0edab10c2bc4bb6b06",
"assets/assets/lottie/98170-sunthalpy-404.json": "58325470f3fcc041e2727cb00be8e27a",
"assets/assets/lottie/99318-hms-loading.json": "996844d3a6c8df65193df95d75eb7613",
"assets/assets/lottie/74216-animated-flames.json": "f8a29cc7bc26029339a8d0acc3d36d33",
"assets/assets/lottie/98642-error-404.json": "4a61d51cbb1148f2b3a8a3cbbb027f63",
"assets/assets/lottie/97039-oh-no.json": "1c52ac12c5fc3614cc0f3207b102a2ec",
"assets/assets/lottie/93494-step-loader.json": "ed87ce519d65a200acb0a16329c29e07",
"assets/assets/lottie/99109-loading.json": "40b88d477ed39462a673257c0e308d03",
"assets/assets/lottie/99354-loading.json": "2615751ab525632beb9bf6f2d5d158cf",
"assets/assets/lottie/81111-loading-13.json": "1841e4048a345b2d9365bc9f322a5823",
"assets/assets/lottie/99354-loadin.json": "2615751ab525632beb9bf6f2d5d158cf",
"assets/assets/lottie/99318-hms-loadin.json": "996844d3a6c8df65193df95d75eb7613",
"assets/assets/lottie/88770-loading-boxes.json": "9fc8a3a71c5047847ff9775ea4b6941a",
"assets/assets/lottie/97409-404-page-animation.json": "88ed7b3692cfebda1166c9eb35f0b389",
"assets/assets/lottie/73810-business-idea-animation.json": "7c8aca2133f85e476925024ed0f2c5c0",
"assets/assets/lottie/99213-mental-wellbeing-seek-help.json": "78a9751c1031bce6018acd5519919539",
"assets/assets/lottie/96372-loader-5.json": "74b10e7fe41504b1806ddff1dcddad17",
"assets/assets/lottie/96949-loading-animation.json": "3ddf757cb3d96516232e1f864f9c10d4",
"assets/assets/lottie/95560-error-404.json": "0ce31d60757dd65cb346828340301a4b",
"assets/assets/lottie/77907-vault.json": "e487e927dcc22c4a1325f119288201f5",
"assets/assets/Light.png": "87318d559e067807ea7b878da3117ae6",
"assets/assets/Hepta.png": "afea6efe3e4d12455b109a803acb857f",
"assets/assets/quotes-left-256.png": "8ce982d88cfbabdbd90392cee53259fe",
"assets/assets/images/support.png": "a7cf25f9965c16a3b01ca25e32a5c298",
"assets/assets/images/3c8ce0e7964dceb355f1c594b7785dde18839759.png": "5694f56e38f053d015ff1a802d462d38",
"assets/assets/images/gresults.png": "0f6c7e9f7dcc1ad0a741c51b8024e437",
"assets/assets/images/max.JPG": "c335bdb859ac813090d8c6ade0bbaa64",
"assets/assets/images/index.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/images/stackmoney.png": "a6f7f4cf741a51a2bb4091a6c556ff57",
"assets/assets/images/kbee.JPG": "53ffdcedc52f812b225dec63ac91074d",
"assets/assets/images/set-up-30-512.png": "3fb61b7a7de09bb7bd858e93348743c9",
"assets/assets/images/secondconbg.png": "b87be4091309e46aa4fe1992206a759f",
"assets/assets/images/xmon.JPG": "c0f0d3641887124eedc8b6da691f58d6",
"assets/assets/images/set-12-512.png": "001401ef47280463803e12db6ce35d5a",
"assets/assets/images/moneymap.png": "8a30e1457aa2e05b4f7f95a3e4a61b18",
"assets/assets/images/p1.jpeg": "bd5758c1d6bc6fe9207910080ab1517d",
"assets/assets/images/growth.png": "1f6dc1e72b5069f9cbc96a8826c184a9",
"assets/assets/images/bull2.png": "a6aa563dd59b7e99c237de5aaf3a4e94",
"assets/assets/images/bull.png": "6fd87db2cf06e5cb5ef61db3471317a8",
"assets/assets/images/tower.png": "e2cfcd13d3d71140912be2dfc8c2603c",
"assets/assets/images/medallionlogo.png": "47f50462082893023b61c9bef344a2ff",
"assets/assets/images/spl.JPG": "81597bb9537af375f63f075f57e534da",
"assets/assets/images/safe-exit-512.png": "f38a190efba092bc435c69421e2d1eba",
"assets/assets/images/866e044c8c1437137883bdf7fb7a235be348dc18.png": "29554e7fc7d638a1364139a7cd99e858",
"assets/assets/images/qualityexperti.png": "14548a36e4224547175de3353b123a89",
"assets/assets/images/p3.jpeg": "1651c6c60ea4db6c821d0c6c84f4bcf9",
"assets/assets/images/p2.jpeg": "ad6fc90720d3f74abf145ed98a77e851",
"assets/assets/images/tower.jpg": "689f1eb6c6337c54b49ab17fdb60fa98",
"assets/assets/images/ernest.JPG": "c042dc3dca98dbc866c2cb7ac4c4227d",
"assets/assets/images/ekay.JPG": "23b16cc78031b0a82ea17ec3cdb7c599",
"assets/assets/Last%2520.png": "fe8338b5bb56d7e1dc4df37d87eed0d6",
"assets/assets/linkedin-90-512.png": "04918d57495eb4dbee9ae3d4ba091c89",
"assets/assets/heptalog.png": "c62ab0df29c43dbea3c2906f6344b99b",
"assets/assets/99801-financial.json": "a59eb67b3f48e9626a26bfdd4769aa58",
"assets/NOTICES": "5d21b165017a4fe81dadbfa7a7d27011",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"main.dart.js": "0e8f4cdbed7ddc13931df95c358270c8",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"version.json": "028d98fee36597aed55c49eea9b9b71d",
"manifest.json": "fa8f25abb058cbe5c8b438116caaa01a"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
