/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "f959c366bacb111a902226f37caf8012"
  },
  {
    "url": "assets/css/0.styles.9f0c5eb8.css",
    "revision": "41ef4cbb072e78849ff41015461042a1"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.40669d63.js",
    "revision": "65c65649da8753201064beafd1d04115"
  },
  {
    "url": "assets/js/11.760f6623.js",
    "revision": "30bf242bdaa6167e1af96c252d29da75"
  },
  {
    "url": "assets/js/12.7059e864.js",
    "revision": "25996e33cfdad4d8e91996443f138b85"
  },
  {
    "url": "assets/js/13.ffac00a9.js",
    "revision": "50c850398fa0988ba7616f48d54b6e6c"
  },
  {
    "url": "assets/js/14.5caa786f.js",
    "revision": "5770c2a0a3919a896181784b26d198a1"
  },
  {
    "url": "assets/js/2.b9090a00.js",
    "revision": "8ce3f94ef1cc2d2d27da38b95b52a22b"
  },
  {
    "url": "assets/js/3.def7e666.js",
    "revision": "5acd5c257032d89e1d68aaafd0232850"
  },
  {
    "url": "assets/js/4.e735214c.js",
    "revision": "7dcb98fb7b564687ccb0a18137c52124"
  },
  {
    "url": "assets/js/5.d1ab367d.js",
    "revision": "1cfbbca5b9435297a1198d0597c4a69e"
  },
  {
    "url": "assets/js/6.2e7721dc.js",
    "revision": "477ceaeaa6938bd04e912d920c7a025f"
  },
  {
    "url": "assets/js/7.74110a67.js",
    "revision": "6d40c46059ae29cecde4ea6e89cbeb8c"
  },
  {
    "url": "assets/js/8.b35d31d4.js",
    "revision": "17e18ba5db4e9fc5c21f10f7fabaf726"
  },
  {
    "url": "assets/js/9.d360fd08.js",
    "revision": "e908d683a4f5cfe70128d7f548f03a5c"
  },
  {
    "url": "assets/js/app.5abd2b74.js",
    "revision": "27ca55f3ff4b625606d478347665cec9"
  },
  {
    "url": "demo/index.html",
    "revision": "9848cb893ef48450a952d573595f9991"
  },
  {
    "url": "demo/js录音/js录音.html",
    "revision": "c0ad06ce24b07cfead90f0c9ea69c398"
  },
  {
    "url": "images/7阶层叠上下文.png",
    "revision": "44951101ae459cc66eb53a67a2e26117"
  },
  {
    "url": "index.html",
    "revision": "1770cd5b38821eba2e1aae8b789a3ae3"
  },
  {
    "url": "interview/CSS/CSS.html",
    "revision": "b73159268276dcae0b0ea133c877b936"
  },
  {
    "url": "interview/index.html",
    "revision": "46048aca40195b8baa1fc41763faee46"
  },
  {
    "url": "leetcode/7.整数反转/7.整数反转.html",
    "revision": "ea9eb11e42b10ce15e0987c4f1722433"
  },
  {
    "url": "leetcode/index.html",
    "revision": "20ba6fb0e0e93a144fb13339c642e957"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
