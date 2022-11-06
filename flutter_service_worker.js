'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "d6e4ad7d4a54b42d6226e417dd8901a9",
"/": "d6e4ad7d4a54b42d6226e417dd8901a9",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"assets/AssetManifest.json": "13c2caab96a006f5074d27aee78f21f6",
"assets/shaders/ink_sparkle.frag": "0ff5c2d72578756a2d288596d5a621dc",
"assets/assets/twitter-156-512.png": "5c8962d313784c0252e2256be896883d",
"assets/assets/instagram-70-512.png": "6411128d1d33d19722a151d345eeeb16",
"assets/assets/Line%25206.png": "ff7dda51bcfd79510cbada7cc9a91f03",
"assets/assets/worldmap.png": "0258e23d651aa88a6d6d098debeb8fbc",
"assets/assets/Financial.png": "67fbbff0526a83567d283c072ddd49f1",
"assets/assets/close.png": "726335922a26f0e95ee26de8dda5c87e",
"assets/assets/biglogo.png": "7d361f889ad9cf6e07b1361f169edd7b",
"assets/assets/eurburn.png": "55ee0f0905ab915b675ada8fe9033015",
"assets/assets/logodef.png": "3e79c6d9a54e5eaa3ba14c50ffafae2d",
"assets/assets/loginpage.png": "76b08bacda2d6468c0eb49fd6af4fdf9",
"assets/assets/backk.png": "6107be5f1efe487460e7ecd9cbb22816",
"assets/assets/smallLogo.png": "b813ac6a057425681469f02d093bc94c",
"assets/assets/quotes.png": "f44e84bb543116659ecb23cce884a1cb",
"assets/assets/facebook-130-512.png": "97f5b0a2f8d0333744f41a4f38f498a0",
"assets/assets/piggywall.png": "d5a5fed07837f143dc4f61d9d0416d94",
"assets/assets/support.jpg": "b89ca3051c234e7fe93b1dfcff134361",
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
"assets/assets/climb.jpg": "d0ca877e289114acdf81f22484c2cb99",
"assets/assets/linkedin-90-512.png": "04918d57495eb4dbee9ae3d4ba091c89",
"assets/assets/heptalog.png": "c62ab0df29c43dbea3c2906f6344b99b",
"assets/NOTICES": "b69a1ad5e5f938cf0d5606ba2be3d329",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"main.dart.js": "f9d0beda9ab65125f0a8cdbd93975a33",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/refs/remotes/origin/main": "a0a189ed726821a8f4ba031b6b2d5d9e",
".git/refs/heads/main": "a0a189ed726821a8f4ba031b6b2d5d9e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/COMMIT_EDITMSG": "6961d7607f40a71bc7f0111a7c0bb443",
".git/config": "c1909ba14d7b16bf525020714c949797",
".git/index": "ca19bf42ec5d11d4ab0cfdaa66c92151",
".git/logs/refs/remotes/origin/main": "5033f6a290f3bdc760996309a7c61dd3",
".git/logs/refs/heads/main": "17a6945b391d1bac6a1d1e57a4225a93",
".git/logs/HEAD": "57d08ac01e19cc57be18c918cbcf3c80",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/objects/8c/1d16bfe20f76f4298dc8780de80ce868241486": "64fb384e0196d43b4094faae8e6cd1ba",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8c/0cb024c11b24f82ad1b99a4e5e641b195d5fda": "9ce4f4854ab94b5c0a73b248529a2dbf",
".git/objects/e9/4ffe260979e79651bfc63ff38e49816c54aa34": "f74678b9ff5c2c405a77e8dc877ba3bf",
".git/objects/00/51a782bcfa998d2af1c05969215da5fafbb948": "baefd2f73d83aef4385d7de55acca484",
".git/objects/13/cf37c84a2e311d6b9ac6f22f39d93f74749e88": "7ff6bf2380e6505aa7762ff47dd43a93",
".git/objects/48/31dfac827fb7c5e7c0cd210443d1e433a71b59": "c4b9d5a24ca231f1a1f36e60c0a4081d",
".git/objects/48/ef85cd5fa50a24c34f342ce7db3f360d2b3e44": "ae00bd2c330161ea7317099af8147da0",
".git/objects/6d/7973a3602c75feea84190449fef55eb77a0ae4": "44d3f081e91a2c8815a5a46a57298a8a",
".git/objects/6d/8e0f56625d874ae4cbb09fd42189b469d1b4d4": "f44dccc386db6735b38a9c6c91474f7d",
".git/objects/06/e6e2ef962d2e31381bf3264d5be8987e6ee2b7": "28dfd9e7e28c10364aca63ec8abd8235",
".git/objects/9b/da843d3040f6fdb5c0a7f9862b318a86d55e6c": "acd691a47fd8dc2177b98af6935517a8",
".git/objects/5c/61e70a98f901678de173fab3f01945ec56ea84": "b4b760e5aa82d1756530561ec92dff61",
".git/objects/63/d78cbd8600051fe98a5163113bd9600067d7f4": "73bc533034113d4c7850c365939e78f3",
".git/objects/b6/dd95de1d880437643d9678e536017de76be5a1": "6a4644c1b7136d72047c10f0da819eda",
".git/objects/25/327714dd01caa8a026834035b655147256bcb8": "da163a6dfa5f7cbd71dd0815020fbe83",
".git/objects/be/9db0844bde9ded7170c083519a5b753cc5276b": "9f3efb53a4ab00fb1f6de836dd52a6e6",
".git/objects/53/4efddcc2df23dc55ea38258f3021709ddda1cf": "53efe5054a2542c4820cef8d71377b67",
".git/objects/3f/e93a326d0cf98692dd717f0298d59952bcbfb5": "4840bc00770cdfa89a3804106eaa3ba2",
".git/objects/f3/60922c00897d307e6b26be88a60007317cac2f": "4dd961c2b6479db62f0cced8ea41a8ce",
".git/objects/26/b1be36d09cbb758e6570dc43abeb0014559662": "f022bb08dd7a0f9b52bc0a362715de85",
".git/objects/78/75a9efb9bb8079049d4790012e89095a776cb1": "974ca56f1e6614af05488e7850255cba",
".git/objects/d3/f0121aed3c57abd5ae3d42bd734ebc58374987": "b82e6ae9a339f5caec4021f6d096273e",
".git/objects/e6/da258c8a64e8e7b67d156a4a42193ffbfa44a9": "44d9dbf535667f583aff62845da051f0",
".git/objects/e6/9530fc758e6b6128decd8c1eefcf5cb2ccf277": "f3f0e6e9939269e30505d4bd2e0e02bf",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/8e/3c40f7a633d7afd25e63ca62f078a66f26c160": "ae73f6f823bd39b579ce5bc8978db860",
".git/objects/15/6d2b6d6dfb54e9920a85c1c464791b6529b650": "fa8f2ae835df5f1359ea71b57c32c2e5",
".git/objects/15/825bc20281156d18d27baa8241a330696ec0ed": "ea982a21ac186236d027133580185f60",
".git/objects/15/108810d033eaafef1a797d1a618fc213387815": "03928a7772109996d643abf7b7ca1de3",
".git/objects/15/0d3b8b1fe31ab5daaea1f3247abdff1054d8b9": "939da1109926b6fe5c697d3131129f7c",
".git/objects/3d/69802a8e001d7d5e650b36accd1a00e82e7f3d": "54ec22128f7a1b5519851fc76422502b",
".git/objects/3d/8695e628692c10ccefb444278193436cc3baa7": "33c889b6e855aec5488af203acbf95b8",
".git/objects/3d/ee4029c11fa89dfd4c340bf6ba35f24dae71bb": "35e66b40a1fc33198ee2d9c93766c61b",
".git/objects/f9/85674d2e6050f530fe5c488ec1ef18477d977e": "91ba4355e4e3f7f2c281f431ffc61d61",
".git/objects/f9/d94dc9c33683b6c18ecf6094815bd71045d67e": "f40e0cbf884895e6c337060b06c14ca9",
".git/objects/f9/35fb2ed5846a61425ea5cb96534af9df4b00b6": "01900412ddb85d89e97be1d75f033c26",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/87/32c45290817a7e1191b2295c7b926859b478a6": "c247236af1aff9e104b156978a2468de",
".git/objects/2a/6d6f47fbeda972909979f75084bf02d4b5519c": "69798c4d66a01211fbd518425f22e300",
".git/objects/c0/71ee2bfd2eeaa2909d76f8bd649f2523b0b713": "90164c93ea69a25ac2033cea2bff7a37",
".git/objects/c0/0b3169f49c96e6d44c2c211ce45cf41327656e": "d22b43973448429a31509572eed5427e",
".git/objects/fd/562018840b86457f750424d599302797a720e4": "e6b18d9e555932219089ce73e39787f2",
".git/objects/ff/50ef83c45ec97343cf26e66495b8351df21dae": "0277d93e8806d9fb16f210a98058045b",
".git/objects/ff/1d5ac44e0d341575b8d9f2b99303e85efbfd05": "3f58ad7e7dcf97fd2c0cb15c245d3d02",
".git/objects/92/5de05491074e7fe66fecb9334c0f28e4313515": "8786e3a94528775f3431337f8cf6a599",
".git/objects/d9/b306a561786c37dc1f5323cdaffb4ad7acdf2f": "9bf31c254a51edb07de76e7fe2ac6d2c",
".git/objects/d9/6c0301839f6bf6d42ccb8094f9d3ff79e72264": "286619835851521c73192efe49357b5e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/f6/9a6a8e3dcd9414bad5712bb6f9a66c7190938e": "0178e1b24973696bc5c6e861372ad655",
".git/objects/d2/aa5ab4b256a593bd4ce69537d861656c938341": "c00d22d973865dd9cb47766cb46d5e33",
".git/objects/0a/71fafe79b63f2068f52d4f6a30f6d18d6ab0d6": "5b829adac9eb270c9ea4cf111a8dc1fd",
".git/objects/e4/f19360e28eed25a0d37a908858e5868692770e": "4c879af294ea2ac9f9bc5f934936292d",
".git/objects/e4/90ef6fda852f0d90b7742775db10912ba5d559": "b2d2f0726fcc8d752590e3921a952f5f",
".git/objects/c2/5e8d33da58d3a805315a833ee227a824bc2fb4": "544cbe8e8ab3af02ad390a2cc3e1e5a5",
".git/objects/c2/dfb8dab0bc4f302bb557d47627bbaca2fd1d43": "9192fdc85c15851dfc0709de35df5171",
".git/objects/c2/8a5098633587eaa8cc5e98bf2ddb499f1905bb": "ffc74c9cd130e97da1e0331b91153f45",
".git/objects/08/932593d0b4dc1d4c389c837e0fc9e155dc15b0": "2dd937d3138bd14c571befc0f21e5c87",
".git/objects/ba/46506e781e6585d4d4fd598e42fc8d0c540a89": "b3623ad626e1b462b6b9526d2f3b1836",
".git/objects/da/30a4a379536502daaa70305b266d17a43b8b92": "9f5232f3eb272b91da21e1c6e569c3ce",
".git/objects/da/ff54a2e4d03874b6db5a5aeb2a4400ea1fd3bd": "1a21f96e2ccc604140efade9d507a7d3",
".git/objects/da/7f40bdc0b9bff823eb5ee18f94375ad8ac4a15": "e9815a9d36c10aaa1af334fb781743b3",
".git/objects/69/d886ca6dd71a3eb4f5a58136bc995c2fce088b": "763391707fd45aef8eecbe99440e896d",
".git/objects/60/c247cf122d5bd0f94a98de5a39036ff3062b37": "97474ac06f2c0cf7fd4aa17952440e95",
".git/objects/cf/f5d1cd62e62dcffb56f48e043db1852d24d274": "cdc16ae0d98e7f6057e609f14d3ba0f9",
".git/objects/05/7dcaa584e6d188c12421c766dd0af66afb3e83": "d0d813a45bfdbfd8ff5f8c0a40086903",
".git/objects/4f/5acaa91de06fc299b2995f24d5bc232216a052": "5b0d5d4519a42c65f1646eff6ff166e9",
".git/objects/6e/85e5f92900e81072d38d22ffdbaa5b5a2d17d0": "1e1d8746257ba996dc5baff3e65a565b",
".git/objects/10/219d24d494672e51a9a8c0425b251edf96581d": "105a07a6d4c329597aaf8b391a2a6d19",
".git/objects/10/7671159d606dedffbeed42c7e34ccc389a7492": "3904131ec32750104a89189f624de9c1",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/67/08a9d17196622f2bbb9b5178e250458ed35067": "07bf10d33b8d6d06d8f0ee986d80aaa8",
".git/objects/6f/bea0451b8740b708d2dd3cd5d93c99ea5f0426": "99c466932c052d4699015afdf42316b0",
".git/objects/c8/1a423bc4f05ba250eb424eba6237fecc958282": "3b708edc8d0ea3c3b9342821db319126",
".git/objects/37/1058383f41c49bfd1b2bffe7c8d972ae9048c5": "bfa6f4bb42ce860af3c8995d2716dea4",
".git/objects/18/02249cb6664d077a9156d5d6e63c71cbdad0b5": "23c69314385d46cf79f518b56e0ecdbb",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/96/39caa3af12fce7793664f3b6e98d8e695a82ae": "924c47e57cf567dcea6c087bc8d0e9e8",
".git/objects/96/6afec94f4c67d20bfc7e7db714be7b2d98bce9": "1bcc5e49da682ca159dbfc4782bc740f",
".git/objects/77/82babf2e8429e44ae5bbec588a81abfc11f52c": "743a3dffd6749f212dafdd6b66fe3f1d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/b5/aab63e808eefaf33f79443d6e71695c0e35ff6": "d8fed96c96b7f611edfd1846f4a800aa",
".git/objects/86/8843a12f6e471ec2bff8b167ceb24fc59cfc8a": "6ddb914b071ee8befc912757bd9262bb",
".git/objects/97/b9c7538cb379eceb5a4e8138df4a4fe0813086": "600a731af4cb8a6cd3eded9c1d612ad3",
".git/objects/36/257ca004e745cbe123955a44a41ee45860ea33": "bf6b5d37057712183d9559385271b6e4",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/c1/e904b03f8321e17354cdcccd9b100f9e8362bd": "16f6e8b6939505b5d2e805d152f3b8dd",
".git/objects/c1/fa8b32a8fe257c5238fb12deb058b90edb25be": "eecd5b3dc1c28b8c409be31d159c426e",
".git/objects/66/6adba478b37c689360221bcaa4d3da122dc723": "651fe5a7779a14139af84386fe0bc24b",
".git/objects/03/c33f69012a8f1c645418703ae2a92c4a996e03": "0d8244e02a33b23762642dcef2c88860",
".git/objects/03/de676c7f7931f18aa0abf5179a85ca894fcccc": "7a5fca0e2b91b52655fae6f6120fb196",
".git/objects/03/a2374671f73555e7b5eaa6e1629406b13204b6": "f74bff285423bfe45e33a0b89ca3dd0b",
".git/objects/41/1815f9e5113ff91ea05d53263a3dd4ef3dc98a": "e11eff9b26c8cb7ac716bd5157fe9ae7",
".git/objects/41/dba4728f099d057a669df6d4cb95f16c0f528c": "0f365a05b5f388c84ec062ecaef43a3a",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/43/e8e4cc3257d004730ddc5a52f721f5e1872e67": "8949fd47d3633b5acc91850d930c538a",
".git/objects/43/5f208ea8e6b56ff0b0a6d1ec5efb430a6cf904": "994b28d034ef833cbed39f1331227069",
".git/objects/58/075041a618de8929a369052cf4efa33b0976d9": "be7fe18b1b7b533e8c5747d07184967b",
".git/objects/58/1e2770e569dd45656729c1d0413c8c450a0535": "619c557501ead59bfeb54d281fe4388c",
".git/objects/a5/02b56b76c82bb280c78e153bc43980f33b590f": "8297c1e2752e8fec639e3361b72a9985",
".git/objects/34/16f4819e6cac02a40b1cd02bd1423f9fdd0aae": "d3f5b3ead3e053d43c6a94d4a68a2666",
".git/objects/34/e12715045ce771d55d18cb0d4009fb251405a8": "0a9122ddc24eb254f01aaff471369953",
".git/objects/20/054c7f66fbb64cc88e3a53a38b7127c39ddf1d": "d1f925426f7f1af43ccccf7c43a5233d",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/3f0d67409ed7b5ca2f33f1f204339f90afd51c": "c8795333b474387f7f31ba5fc81566db",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/07/62ffd5248481908df1f782aa28f48fb5f00561": "2e226ef199b056d8e83f29c3ebf557bc",
".git/objects/e5/f1d06a75b7075cb049f210e5aa839c8a892f90": "42a621a78ec4ce8d12c0f96e96c97baa",
".git/objects/e5/7d79f19eab3fc0c216bb524023eea01053a947": "42682aa9f3f024a728019a9e610fd0e3",
".git/objects/e5/91c3b790f9e2d87c63614c1560d23bb93ae667": "577ba1b1bf4dfbb9f499187daad3b877",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/d812cda5945ffa0cd0957af6102bd35e14d68a": "c0ceeaa8914e487f44cc025bc963e745",
".git/objects/50/36242b7a8d3f25e390ab7dfaf159a47f354b24": "a80945961b0023dbbbd2ed5345e71f41",
".git/objects/d4/4673d0d64e161d09f3657a2de4ef174767a280": "4b5910d4475bb83e9477594210351915",
".git/objects/ee/25e4b09db6911395abf6e6f5eaadb1ef122c76": "b38d0b1f30d1e07d7a0de00996334d70",
".git/objects/ee/42e489784f2eb963dfb0b9fc254a00dc2997b1": "8bdbe800ac666b9dfeb317d813d208e6",
".git/objects/ec/bf0ab3578c6fc432ff05d43f4b8b7e46532154": "29223cbb8caa6fb82bdad279472a3787",
".git/objects/95/17cbf6a86e6e2d77b9f51a8b9541ad8b48dc8a": "0f4f98417ea63dfc6deb5f90c8bd5580",
".git/objects/4b/102f1e319cd9779fbb8c2d97035b5cdbe0df38": "709de1f3740c4f6b9c2548a8706d2c47",
".git/objects/4b/789c3ce6c7ff44d5bdf589ab8af9a92097774f": "1b8255e7544ae20a8a7d4064937cd256",
".git/objects/a4/64bc6acb5c7a6c3683e200578c70a5ad3291ef": "cff10e2ca3fc0b2308f755d27e1220d8",
".git/objects/4a/23e7938f392121c0cb344c4962ce99e6f98851": "3c20aa1ea2e0fa7d42eefad1cdf1e11c",
".git/objects/29/a05ad6d342377938cc9cadea8f31fa0d673af8": "11176ae5c31fa3b288753427f0741cf0",
".git/objects/29/646f490252ed4918c25ea2f63dce457df5b369": "0af15a3991358d2a10e6a559e7ae7987",
".git/objects/df/e6de396819a5e17d8e90762c6fbc1c0b00cf30": "ce2671b6cc7b48e4778a7c2a91a9a805",
".git/objects/df/0fc71aaac923b5238fd78adedc9ce1e43a945a": "a34bfaf9af4953064142650c85a55a2d",
".git/objects/e7/7f9306006aef773bb9d803926b521c78184fc3": "01695fcaa0f44430ddf15709e371e847",
".git/objects/e7/8d6a127ac364f940716938505aa6c62d595356": "dba046aecc412a9a4e362ac45bb3df9a",
".git/objects/9d/10ee00e838b87fd80e396266fc11328e10731f": "52181361608f2dc30705b49e22e32165",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/09/e9f8c5d06bd9dee69bc555a5d77cc99e6e504f": "8864fd2eb8b4fbef80c7ce17492ad85f",
".git/objects/80/2794a3cf3cf8ddea7736d7d9906b0862fac5df": "2c4abd79dd4b9cd9edfd16d2d1856193",
".git/objects/e1/56c700d70a3de3f82e2d9487408d409b6062f9": "b6e04f7653e1e8783b1fec72ddba4dc6",
".git/objects/f4/bec8da1db96312ca07e9f4bc388c90258fcdb3": "675fc6c1ea502de2d575b5606cf905fe",
".git/objects/52/204094c5e9c0b2caf66b95f4960f96867c04a5": "26f8af9512b2510ac69fd46a0c8f6fc1",
".git/objects/52/de7ad188d367193383b74d24d8bc59bc47475b": "7015509a53b793880bfee10a318b0f1b",
".git/objects/61/9339f9f3e38a6209650c40c94df9716efb31c1": "a2e53f379e24197c3fea3b483dfbeba8",
".git/objects/23/e335e5d58f8ffc480f8f326cd1a2d15f987acd": "b9989076b53be05556febbbdf537f9e5",
".git/objects/6a/95a02a53834bb7c983558c5bc8af27f22a95dd": "c7daa37ccee74e1998caa38c25e575a0",
".git/objects/2e/ab0c00e1de12cc09c613720e4c33f4f20d4034": "f70da7e7c4bc5b7927f4b2cf09b3235d",
".git/objects/28/fcf828833255887056dd1060963a6419437710": "f4c6f4023f8a03a51e14490e6d8a54e8",
".git/objects/55/dbe98dffde0bbf189aae9d1117017357b51f12": "e10436a29635add517cc64f033483970",
".git/objects/84/0e6c0e607744aab4c137ce66325731a739ff61": "46eb461881c831eb2e90bae96cab805b",
".git/objects/65/b186f333a1b19e4e1c047a32f0772e79176b4d": "161c4378880a1d7b3c3af335252c8d1a",
".git/objects/a7/02c7a4467c0073e5a3548d350ee4dc6d329aa0": "af715f691674263a6dde29a4ecbc402e",
".git/objects/17/5ef5a92a2c0319a34693d36a64181170d2c131": "a21e9aa583290459519e5304e7aa18c5",
".git/objects/04/5b03d9b4bf02a25c9e48b55ec425fcec6e8489": "bc5430971e3efc9a1501d71c7087a6a6",
".git/objects/7b/df275c1cca26e8e7e7a01556201fc7ee7a99e3": "62abe0606c2a2888b87297f5fc04d148",
".git/objects/99/e7560c7c4c29ad0bccc7241fe88cae45c40c2d": "309d8cf4514eb876f45d2ea5629b2308",
".git/objects/bb/ead661c309ce92ce4e1568cd5eb22d8952187d": "fa894460b25d3bda5511296a319b5d0b",
".git/objects/49/938d3f0c07beb7194c72b623c46ebc2acc28a1": "c52513b902ead034bc9a32ad0ecef9b8",
".git/objects/5d/61cbddaf30359344dd8bc9c3b0db0b70789362": "31899a87874cb6bfe8bb21fcb362cedb",
".git/objects/5d/ca46110d54fe30e914dd4d84fd053a53070c55": "c1bed8672bc561efb6fda9963f4f4f2a",
".git/objects/51/5f886b8c5544555f03007c61d8ad151a3ade72": "7e8202decec5f05a09fe5f621e981dd6",
".git/objects/51/54cc1fa02b6bf64922c97c613f46246701c242": "7dd0172bbb6f77db98275f93d6a1cf01",
".git/objects/e2/b21fd120a5a62b65ff03580899654493c5ebb1": "c9fbc09f67047d4bacecb62323ae611f",
".git/objects/e2/26354c14075c4b5434c37ac307b29cdc80ecd0": "7ebb6ae35af9f56e11b7805e8ec52104",
".git/objects/c9/7b9fdec0659a5df330bd83a4d3ff46d46f01bd": "5357a72f5bf5662ae53c4ec762f7e230",
".git/objects/0c/14734f047e081b808c7382fadb79e003ef52f2": "c0c63faa1b438b0d1a568db7d8233fb5",
".git/objects/5b/94312a1a529481377d42864bbb649ed6dba371": "b1258fd05147511c1292535faf6cca14",
".git/objects/7a/f40cd76742c74b7f2956b91755b5e1cf99cce4": "77c66a84d41d8f489d848f244f068b36",
".git/objects/e8/37d9e48dcaa97ce401c4ba195807b323f14654": "3114487f9e5882192ec48a0b905d81e4",
".git/objects/82/35b3855d8cc984c72fc4201560f4777a7aa5f0": "e09e2c28b213b3a68cf9bbfc43d7de1c",
".git/objects/82/30cfbf000181a020d8762867b4508485334da9": "6699be2f87fb926fe02dea0dd876a71a",
".git/objects/82/c7c0fdfadcb84be00bd759b432cf5d7b1ef822": "0afca3a7527aea733e0a1304719a1ddf",
".git/objects/42/4e9bab78c940d64b462d8611a80ac94afc6e0b": "419d9af50318d91c44f678f2bc3da87c",
".git/objects/3c/d1240a2084d77bba64835900472d1a05e38b3e": "650da06b12eca00f84a41ac8a46c9ecf",
".git/objects/3e/abd613737d5a16fefcb76e72109d71c5a5cc66": "a961941d2e90811817f9515b22e887b6",
".git/objects/3e/d953d2fb715b20ab85f863bad74a7bd04b62d9": "ea0d61805601fb4361f2b940f95ad6ae",
".git/objects/a0/b12c41ccf418b82570e0fa355fd75c5c6ee158": "0b036e1a2150c3b87258f4147493982d",
".git/objects/a0/94e3d9a005d81dd3aa59163b31af7343739854": "7dd769a552e249d7dfb2a58beaac9646",
".git/objects/cc/1944a9e8833095df5902ff69eebcd64407d79e": "1ab170c6b0a176dc3b2b3c2092352084",
".git/objects/cc/c09deed7c9212072f4540c089c4e3c27ce714c": "0e01777c5f281501afe674b6f57db941",
".git/objects/70/044cf9b4f764e53e9fc91d9fefa21330f2a4bf": "6f1eda6fec843aefa40833af02d6f678",
".git/objects/b2/10515f813cb210e91995417db4095944d35c1b": "44303eecb93d99b56f07f60627cd869f",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"canvaskit/canvaskit.wasm": "d4972dbefe733345d4eabb87d17fcb5f",
"canvaskit/profiling/canvaskit.wasm": "05ad694fda6cfca3f9bbac4b18358f93",
"canvaskit/profiling/canvaskit.js": "ba8aac0ba37d0bfa3c9a5f77c761b88b",
"canvaskit/canvaskit.js": "687636ce014616f8b829c44074231939",
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
