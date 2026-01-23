'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "a52e4ec5a2e81bb7e1540cb9d1bcb511",
"version.json": "d3be2a66aeb9df6d2d696797674d8e14",
"index.html": "f5ba077004918c1502e36778c188c799",
"/": "f5ba077004918c1502e36778c188c799",
"main.dart.js": "fd525a8ebbd3604485d8707fb7b12e81",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "df7e9b8eac8e6f4ab9fd274e598ec14d",
"assets/NOTICES": "e30a9712b8f26d4a1df17dee19c366a6",
"assets/FontManifest.json": "34821d9762dd9e6d5d51a3b2ba71aff2",
"assets/AssetManifest.bin.json": "e41bff457a78f07cc049e7866a1d1a06",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/AssetManifest.bin": "8b13c12e3710f67ec77720b4be0669d0",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"assets/assets/icons/icon.png": "2abf756c3256bb9494851e56ea540d29",
"assets/assets/fonts/BigBlueTerm437NerdFontPropo-Regular.ttf": "3d761e7f438cbf2054b319d2d7b501a0",
"assets/assets/fonts/ProggyCleanCENerdFont-Regular.ttf": "ac98c09590c5e0bb3e4155b96239a22e",
"assets/assets/fonts/IntoneMonoNerdFont-Italic.ttf": "2d56cfbe19358bad3f26b5d861bcd676",
"assets/assets/fonts/OpenDyslexicMNerdFontPropo-Regular.otf": "66530ca995e99531be5e2b87328dafe0",
"assets/assets/fonts/IntoneMonoNerdFontMono-Light.ttf": "6c4b608264af4d6a53c07e2087a9518c",
"assets/assets/fonts/IntoneMonoNerdFontPropo-Bold.ttf": "9a57d1603955dabd6ca32defcc69e76e",
"assets/assets/fonts/OpenDyslexicAltNerdFontPropo-BoldItalic.otf": "3bf7e377dab3ad10835954b99ed9125a",
"assets/assets/fonts/ProggyCleanSZNerdFont-Regular.ttf": "8c2cbaaf3e2a7681f5f8dbdd421307b9",
"assets/assets/fonts/BigBlueTermPlusNerdFontMono-Regular.ttf": "b1b19794926a7d767927a503d59eda66",
"assets/assets/fonts/IntoneMonoNerdFont-Regular.ttf": "582a08f4b0881c382e2c2184d344fafd",
"assets/assets/fonts/ProggyCleanCENerdFontMono-Regular.ttf": "f31e0ca79906cb3b1cf7573d7e8ce486",
"assets/assets/fonts/FiraCodeNerdFontMono-Light.ttf": "70a02b962892366666854bc176703627",
"assets/assets/fonts/FiraCodeNerdFontPropo-SemiBold.ttf": "eee7dbe343b0c30c287fda0cf031ff63",
"assets/assets/fonts/IntoneMonoNerdFontPropo-Italic.ttf": "65c3b36a7cc550ae006bc44ccce7565f",
"assets/assets/fonts/FiraCodeNerdFontPropo-Bold.ttf": "4a1feb742da1eeda0896ffa951d945d0",
"assets/assets/fonts/BigBlueTerm437NerdFontMono-Regular.ttf": "034e3d2750f02b168a2a0e4bc743a2b1",
"assets/assets/fonts/DepartureMonoNerdFontPropo-Regular.otf": "d39fc7472756b39f68007e01b602c7c1",
"assets/assets/fonts/OpenDyslexicAltNerdFontPropo-Italic.otf": "5ffa848d1dffea179e4356916d0d8d72",
"assets/assets/fonts/GohuFontuni11NerdFontMono-Regular.ttf": "b51ff0b360c85ca999fb2418581fdbcd",
"assets/assets/fonts/IntoneMonoNerdFontMono-Medium.ttf": "7860cc991862f007054d0f869209e071",
"assets/assets/fonts/ProggyCleanNerdFontMono-Regular.ttf": "c78b408c1731f8bd1df0c7ef71329632",
"assets/assets/fonts/OpenDyslexicAltNerdFont-BoldItalic.otf": "13def3fca8274761e085ca44372d5d1a",
"assets/assets/fonts/DepartureMonoNerdFont-Regular.otf": "2a9406d4f6a583da1bbb94b88cbc6da2",
"assets/assets/fonts/OpenDyslexicNerdFontPropo-Regular.otf": "494bca151a3bd95f55d19e9ccb20206f",
"assets/assets/fonts/OpenDyslexicNerdFont-Bold.otf": "dc69fe2b8e58f57bfb6a7c560150a983",
"assets/assets/fonts/OpenDyslexicNerdFontPropo-Bold.otf": "d4fbe2319d41a37328e7b5011546d211",
"assets/assets/fonts/OpenDyslexicMNerdFontMono-Regular.otf": "17d27212f51141aab3e9a012ee95b03e",
"assets/assets/fonts/OpenDyslexicNerdFontPropo-Italic.otf": "b2db990dccbd2b8cfb0ab968db9c18e1",
"assets/assets/fonts/OpenDyslexicAltNerdFont-Italic.otf": "052199cfbc3102753a5975d66a4f4f18",
"assets/assets/fonts/GohuFont11NerdFontMono-Regular.ttf": "71d1d15f053554bceceac269881e0f12",
"assets/assets/fonts/FiraCodeNerdFont-Light.ttf": "a06e119b190ea3f51f714aea93c5f08b",
"assets/assets/fonts/OpenDyslexicMNerdFont-Regular.otf": "ad17de28990ae7c13f638c16c434b0fc",
"assets/assets/fonts/ProggyCleanNerdFontPropo-Regular.ttf": "18a70414d15229d69d86935e0187759f",
"assets/assets/fonts/IntoneMonoNerdFont-LightItalic.ttf": "68632ccdb1ef3c35c73d02d2bedfcb45",
"assets/assets/fonts/BigBlueTermPlusNerdFontPropo-Regular.ttf": "29e3d23dfbff50dc9c6c884a334a8c2b",
"assets/assets/fonts/IntoneMonoNerdFontPropo-Light.ttf": "7983e38256f240c3fc786df2afcfa64c",
"assets/assets/fonts/IntoneMonoNerdFont-BoldItalic.ttf": "15f6575955366ea6df70a79ac865f23f",
"assets/assets/fonts/OpenDyslexicNerdFont-BoldItalic.otf": "84dbade1e0351ffc5498c7624341f575",
"assets/assets/fonts/IntoneMonoNerdFontMono-Regular.ttf": "eae3a1b3af25887dbd265c31f025a99d",
"assets/assets/fonts/GohuFont11NerdFont-Regular.ttf": "5ef10b42f81bdb4de337a179d8d13d4a",
"assets/assets/fonts/IntoneMonoNerdFontMono-MediumItalic.ttf": "1008fe41baea197c7e34fc203dfe5c92",
"assets/assets/fonts/OpenDyslexicNerdFontPropo-BoldItalic.otf": "b04143f116544b4e783cff4272c3a4a0",
"assets/assets/fonts/OpenDyslexicNerdFont-Regular.otf": "7f870c9795bf88be710a1bdeb7fdc319",
"assets/assets/fonts/FiraCodeNerdFont-Retina.ttf": "11a6d32d25509fcfa5a3544f4286844f",
"assets/assets/fonts/OpenDyslexicAltNerdFont-Bold.otf": "5e17e15b75d8884c7ffecbd128b6fbae",
"assets/assets/fonts/IntoneMonoNerdFont-Light.ttf": "8abfad21c947888d50bdca1e51711a2c",
"assets/assets/fonts/GohuFontuni14NerdFont-Regular.ttf": "e2f419bc3291dd61170dbad020ed2625",
"assets/assets/fonts/ProggyCleanSZNerdFontMono-Regular.ttf": "efbf0236748b9c8b5b9bbca49f60e5c7",
"assets/assets/fonts/FiraCodeNerdFontPropo-Medium.ttf": "07213f8b470c5b5d5d89a99bbe05862a",
"assets/assets/fonts/FiraCodeNerdFontMono-Medium.ttf": "2b7ae48c4826659e2995a7bde22347ad",
"assets/assets/fonts/GohuFontuni11NerdFontPropo-Regular.ttf": "25101a19181f946ab74d5ef877828c50",
"assets/assets/fonts/IntoneMonoNerdFontMono-Bold.ttf": "da915d884651bdc8ece66737b731fefe",
"assets/assets/fonts/GohuFont14NerdFont-Regular.ttf": "c65f39878ec3afc29b9f7730595174c3",
"assets/assets/fonts/GohuFontuni14NerdFontMono-Regular.ttf": "c91bf49425c7e60c7cd37ca0cf3738e6",
"assets/assets/fonts/FiraCodeNerdFontPropo-Regular.ttf": "b1df23f322810478008d1a9099545c26",
"assets/assets/fonts/IntoneMonoNerdFontMono-LightItalic.ttf": "cf643f581635dcaf48f2de938a874d57",
"assets/assets/fonts/FiraCodeNerdFont-SemiBold.ttf": "f9d11f13e8aa83abec5439aacaf419a0",
"assets/assets/fonts/IntoneMonoNerdFontMono-BoldItalic.ttf": "93a709c54ac15fccf4f78c4d9cf271c8",
"assets/assets/fonts/FiraCodeNerdFontMono-Bold.ttf": "9f742a74b5c47da146c92972ce24ed2a",
"assets/assets/fonts/OpenDyslexicAltNerdFont-Regular.otf": "700d70c46421849f4d03073795951766",
"assets/assets/fonts/GohuFont11NerdFontPropo-Regular.ttf": "1434a2e4d2fa42621ebd2e7fbcbc7055",
"assets/assets/fonts/GohuFontuni11NerdFont-Regular.ttf": "67547607253ec25b0a030cbb4d831912",
"assets/assets/fonts/IntoneMonoNerdFontPropo-BoldItalic.ttf": "c2615585bef72b70990ea8bf54af71d9",
"assets/assets/fonts/BigBlueTermPlusNerdFont-Regular.ttf": "068e7319cad2dec8506ec19dcd615989",
"assets/assets/fonts/BigBlueTerm437NerdFont-Regular.ttf": "dfc233639c229fa9adbecf9da05cf026",
"assets/assets/fonts/OpenDyslexicAltNerdFontPropo-Bold.otf": "63676007b9223548b64c435235a47b3c",
"assets/assets/fonts/IntoneMonoNerdFontPropo-LightItalic.ttf": "b8e3cf89e6fff170ae015d08fe8aee54",
"assets/assets/fonts/ShureTechMonoNerdFontPropo-Regular.ttf": "599aadc8aac11616a9ca77a8176e4804",
"assets/assets/fonts/IntoneMonoNerdFontPropo-MediumItalic.ttf": "05f64fcd60bfd25f66c43f8aebd40e62",
"assets/assets/fonts/FiraCodeNerdFont-Bold.ttf": "35a9ee15a15360db0742af2a243b942d",
"assets/assets/fonts/GohuFontuni14NerdFontPropo-Regular.ttf": "c3e457afeb8d70587c8619e8d3c4930f",
"assets/assets/fonts/GohuFont14NerdFontPropo-Regular.ttf": "753520b4084eb1283883ee026e76ead8",
"assets/assets/fonts/ShureTechMonoNerdFontMono-Regular.ttf": "bcada4d1ba8ebf914e410b659b5c6726",
"assets/assets/fonts/IntoneMonoNerdFont-Medium.ttf": "a90465d209e83a6242fde48fe925b39d",
"assets/assets/fonts/FiraCodeNerdFontMono-Regular.ttf": "28a44b7cd354f30d864aba2425c734ad",
"assets/assets/fonts/IntoneMonoNerdFontPropo-Regular.ttf": "c354d24af731c850aa3dbf9bfdbac2e2",
"assets/assets/fonts/ShureTechMonoNerdFont-Regular.ttf": "c38452f9c1ee81856dfc692f47a34b0d",
"assets/assets/fonts/IntoneMonoNerdFont-MediumItalic.ttf": "4c6dd339972a7768633b873174530037",
"assets/assets/fonts/FiraCodeNerdFontMono-Retina.ttf": "4d045a3fb9ee08b8ea662d680f502e36",
"assets/assets/fonts/ProggyCleanCENerdFontPropo-Regular.ttf": "fb1e47ca90cff3d99cdc897e7bd146f3",
"assets/assets/fonts/ProggyCleanNerdFont-Regular.ttf": "9a2f8d52abadf866ea6f6255cbb22285",
"assets/assets/fonts/FiraCodeNerdFontPropo-Retina.ttf": "ada9c44a71293757fe92aba721d8447e",
"assets/assets/fonts/FiraCodeNerdFont-Medium.ttf": "01b46d4ac8f8e85ee04d908f9d72dea1",
"assets/assets/fonts/DepartureMonoNerdFontMono-Regular.otf": "6bff21c6b5ebddd969a2bec4ef898c9b",
"assets/assets/fonts/FiraCodeNerdFontPropo-Light.ttf": "5b5ffe5d1960e4cf00b84355049e026e",
"assets/assets/fonts/IntoneMonoNerdFont-Bold.ttf": "fad800947d7b2142c8a0bc1c27fad915",
"assets/assets/fonts/OpenDyslexicAltNerdFontPropo-Regular.otf": "35ccc08d062f9f429c9522c791277461",
"assets/assets/fonts/FiraCodeNerdFontMono-SemiBold.ttf": "de8a4aeb28404c867cd597e30e88a530",
"assets/assets/fonts/OpenDyslexicNerdFont-Italic.otf": "792ffa896d7752203229bb8a10f415e1",
"assets/assets/fonts/IntoneMonoNerdFontMono-Italic.ttf": "ed04a970f7da0cdc7e0b82a39921dd4d",
"assets/assets/fonts/FiraCodeNerdFont-Regular.ttf": "b58065b66d8673a0a37dc2d32fdd8a7e",
"assets/assets/fonts/ProggyCleanSZNerdFontPropo-Regular.ttf": "c4f8c541cc3b88b7cd344fc7eedd1538",
"assets/assets/fonts/GohuFont14NerdFontMono-Regular.ttf": "7b3d3895c5eaf2df6b1bd97b54c35bec",
"assets/assets/fonts/IntoneMonoNerdFontPropo-Medium.ttf": "7d2a25673f9cf712ab73dce43babbe59",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
