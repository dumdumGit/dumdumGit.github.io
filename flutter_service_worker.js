'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "0b94449177a57889e7fc202e79b11db0",
"index.html": "1ef9321c064f37421ea5f9df0e9f8573",
"/": "1ef9321c064f37421ea5f9df0e9f8573",
"main.dart.js": "067f040ef222bef9fae572c0c8375983",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "14d164e284f8414376b94a59aea9ab4f",
".git/config": "ce26d949e1b7e397b7a1d926755f2409",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/35/1249aae9867afb6edf7265f5732a116c251888": "8748dccff7037526a5ad9750501d23e5",
".git/objects/67/98c9230170f01b8ec3083b76a71bbae36cb090": "48d08f97b1ee194284bc67af8bf2b9e2",
".git/objects/94/90ffc6d2e158b266f719d58365905c1c5060cb": "98801650050f9fa10870b4e56c89676a",
".git/objects/ae/d624077bf23a7abcef86a6bf19a64fe3301e6b": "0bb222b8bf165a5512cdaaf43b124f60",
".git/objects/d8/ecaec3b95f407d3eff1d9c9a3029a89f58b657": "f7cdb820afec116ebce47f60052692e9",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e2/c69c3fb94651237de80e67a69d458c55b45649": "6673680e554c4a54919594421f2b934b",
".git/objects/f3/e4be6ebe253989b75ad5e9a7b0733822d4c0dc": "6373be4192768a55c25b3e00822f7502",
".git/objects/f5/2af6c31dff826199f3d2f84ee937709dffb5e5": "acbbe9a026464197ffca1f058e3531c0",
".git/objects/c6/a18ef15d4011f903a6024852f0dfa0ecc922a9": "8d2044c46f3f8d7ce5e612a1c887b667",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/4b/e4bebc1763605687c8eade373a17732fd04247": "fb53fd2d58fd6e328b0672bb7ef2c616",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/83426f3ee4a5aa389ce81c52bfcbd484312b5f": "99f7ec2f6efd4607fe719b2258104a7a",
".git/objects/2f/c6a1be7f9320d182165497feda37459979c31e": "a15d6a66d78b5d4bf9f496275e16dad5",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/91/a1bf2d64b36cbb9a0b49673c44b722330a4b9a": "e1fec45bb3ef479738d8b0f14b6ed3d6",
".git/objects/54/b0fcbbe036f9f0033687af4a8354cf064a1fb4": "1e9d9b630e7fbdbf7ab224e8afb5dbaa",
".git/objects/5b/fb1efadae701df984b6996c9c39871712c00de": "f9f93ab140bb4801bdcd76d6ec04d176",
".git/objects/64/21c79e1ae52886025eed753d9b667e1ae20fde": "2ce7b0880cfade0b10b753b4e62ab4c2",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/cd/46d6c03065e508e7be6c3e2a52862c294231a1": "b63a77d811f9107938064b6e7409504e",
".git/objects/ff/b89c07f0a95c4ca34d98956bbe1a319baf30b6": "9996ab7d63544a47739e1aa1ea38b40c",
".git/objects/46/0e082d0d1637cca14c0879974cf12fc1d07ba8": "dc46530747265a8a61fc2412f78e791c",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/ed72f04d7bd5298d1a0d22c4ee30675306b4e2": "adb4922c12a909ae75c1632113f9faf6",
".git/objects/70/41a924f0b2cf0dc6f6b17b97991e936ac9d04f": "22338426e97c68658ffa859b3c8babc2",
".git/objects/4f/2251b70357acc4bb7d68b24be4a0c446fcb874": "a397cda1c3d8758b1e6887932dd0004c",
".git/objects/40/86f71dfa5e148021f1944be51089961b4803e5": "2ad4f5d77df6c5c01b6320d6e05d9604",
".git/objects/2b/57a81041557355c0f0eab8ee769ef2e8b82ad5": "2969050a3b3821e9526234ae2cafbd80",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "04481b4dae9280437ff94c5213e2ec4d",
".git/logs/refs/heads/gh-pages": "04481b4dae9280437ff94c5213e2ec4d",
".git/logs/refs/remotes/origin/gh-pages": "83bb60ee8a5aa129c2d730c850274c9e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "01b1688f97f94776baae85d77b06048b",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/gh-pages": "ece85d7336586d311b49b922b7360a02",
".git/refs/remotes/origin/gh-pages": "ece85d7336586d311b49b922b7360a02",
".git/index": "7e559df877966b5b27fdf07196b359c1",
".git/COMMIT_EDITMSG": "60d2c3654fdf9b9c1db0462aa60ca7b4",
"assets/AssetManifest.json": "a5f6e3aa8c21b626eb84f651efbe32cf",
"assets/NOTICES": "381e482b11aed2e565c02a2995f5c92a",
"assets/FontManifest.json": "8f036bb4279e4857a966e259b818f8ae",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/email.png": "9d4c7bc08ec1db97db64b27b1636ba84",
"assets/assets/instagram.png": "a11315201911a2d50acb12f211af971d",
"assets/assets/github.png": "0c768863b084475e3760cf618d154919",
"assets/assets/moon.png": "12dba6072ffc8f69c6e018dd2ac1aa9e",
"assets/assets/avatar.jpg": "e742ca6845ffa58576cb69d86a224835",
"assets/assets/GoogleSansRegular.ttf": "b61c0ab33a818a0162f3e868babcef4b",
"assets/assets/works/website.png": "1e6fa9771513f7134965e069124569aa",
"assets/assets/linkedin.png": "9e30a53773d9b313782e48ace17fab75",
"assets/assets/line.png": "2411f2f86f4f048c8b496fd2117deb9c",
"assets/assets/facebook.png": "fa65c8f1c840305b7ea30363e5e5dc58"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
