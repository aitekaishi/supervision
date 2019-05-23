const app = getApp()

Page({
	setting: function () {
		tt.navigateTo({ url: `/pages/setting/index`, });
	},
	aaa: function () {
		tt.setStorageSync('urlIndex', 'https://jinshuju.net/f/6nS1h4');
		tt.navigateTo({ url: `/pages/message/index`, });
	},
	bbb: function () {
		tt.setStorageSync('urlIndex', 'https://jinshuju.net/f/ka6W3S');
		tt.navigateTo({ url: `/pages/message/index`, });
	},
	serverClick0: function () {
		tt.setStorageSync('urlIndex', 'https://jinshuju.net/f/c2SpYm');
		tt.navigateTo({ url: `/pages/message/index`, });
	},
	serverClick1: function () {
		tt.setStorageSync('urlIndex', 'https://jinshuju.net/f/jLdN9g');
		tt.navigateTo({ url: `/pages/message/index`, });
	},
	serverClick00: function () {
		tt.setStorageSync('urlIndex', 'https://jinshuju.net/f/uicQb3');
		tt.navigateTo({ url: `/pages/message/index`, });
	},
	serverClick01: function () {
		tt.setStorageSync('urlIndex', 'https://jinshuju.net/f/WN1Itp');
		tt.navigateTo({ url: `/pages/message/index`, });
	},
	serverClick02: function () {
		tt.setStorageSync('urlIndex', 'https://jinshuju.net/f/jCJZgk');
		tt.navigateTo({ url: `/pages/message/index`, });
	},
	serverClick000: function () {
		tt.setStorageSync('urlIndex', 'https://jinshuju.net/f/q5iXOR');
		tt.navigateTo({ url: `/pages/message/index`, });
	},
	serverClick001: function () {
		tt.setStorageSync('urlIndex', 'https://jinshuju.net/f/taulfp');
		tt.navigateTo({ url: `/pages/message/index`, });
	},
	serverClick002: function () {
		tt.setStorageSync('urlIndex', 'https://jinshuju.net/f/Gqhagg');
		tt.navigateTo({ url: `/pages/message/index`, });
	},
	serverClick003: function () {
		tt.setStorageSync('urlIndex', 'https://jinshuju.net/f/rvqDii');
		tt.navigateTo({ url: `/pages/message/index`, });
	},
	serverClick0000: function () {
		tt.setStorageSync('urlIndex', 'https://jinshuju.net/f/EGxhAS');
		tt.navigateTo({ url: `/pages/message/index`, });
	},
	serverClick0001: function () {
		tt.setStorageSync('urlIndex', 'https://jinshuju.net/f/cwN7Wv');
		tt.navigateTo({ url: `/pages/message/index`, });
	},

	serverClick00000: function () {
		tt.setStorageSync('urlIndex', 'https://jinshuju.net/f/wWVAX2');
		tt.navigateTo({ url: `/pages/message/index`, });
	},
	serverClick00001: function () {
		tt.setStorageSync('urlIndex', 'https://jinshuju.net/f/53dqUl');
		tt.navigateTo({ url: `/pages/message/index`, });
	},
	serverClick00002: function () {
		tt.setStorageSync('urlIndex', 'https://jinshuju.net/f/kc0vPj');
		tt.navigateTo({ url: `/pages/message/index`, });
	},
	serverClick00003: function () {
		tt.setStorageSync('urlIndex', 'https://jinshuju.net/f/ggmb32');
		tt.navigateTo({ url: `/pages/message/index`, });
	},

	serverClick00000a: function () {
		tt.setStorageSync('urlIndex', 'https://jinshuju.net/f/GPNqEu');
		tt.navigateTo({ url: `/pages/message/index`, });
	},

	serverClick00000aa: function () {
		tt.setStorageSync('urlIndex', 'https://jinshuju.net/f/2Z2VY6');
		tt.navigateTo({ url: `/pages/message/index`, });
	},
	serverClick00000ab: function () {
		tt.setStorageSync('urlIndex', 'https://jinshuju.net/f/QyTpyn');
		tt.navigateTo({ url: `/pages/message/index`, });
	},

	serverClick00000aaa: function () {
		tt.setStorageSync('urlIndex', 'https://jinshuju.net/f/PmOGeu');
		tt.navigateTo({ url: `/pages/message/index`, });
	},
	serverClick00000aab: function () {
		tt.setStorageSync('urlIndex', 'https://jinshuju.net/f/boE6qj');
		tt.navigateTo({ url: `/pages/message/index`, });
	},
	serverClick00000aac: function () {
		tt.setStorageSync('urlIndex', 'https://jinshuju.net/f/pAKBMT');
		tt.navigateTo({ url: `/pages/message/index`, });
	},
	serverClick00000aad: function () {
		tt.setStorageSync('urlIndex', 'https://jinshuju.net/f/yScjZe');
		tt.navigateTo({ url: `/pages/message/index`, });
	},

	serverClick00000aaaa: function () {
		tt.setStorageSync('urlIndex', 'https://jinshuju.net/f/NtuTMq');
		tt.navigateTo({ url: `/pages/message/index`, });
	},

	serverClick00000aaaaa: function () {
		tt.setStorageSync('urlIndex', 'https://jinshuju.net/f/5Wbts5');
		tt.navigateTo({ url: `/pages/message/index`, });
	},
	changeli0: function () {
		let _this = this
		_this.setData({
			item1: false, item2: false, item3: false, item4: false, item5: false, item6: false, item7: false, item8: false, item9: false
		})
		if (_this.data.item0 == false) {
			_this.setData({
				item0: true
			})
		} else {
			_this.setData({
				item0: false
			})
		}
	},
	changeli1: function () {
		let _this = this
		_this.setData({
			item0: false, item2: false, item3: false, item4: false, item5: false, item6: false, item7: false, item8: false, item9: false
		})
		if (_this.data.item1 == false) {
			_this.setData({
				item1: true
			})
		} else {
			_this.setData({
				item1: false
			})
		}
	},
	changeli2: function () {
		let _this = this
		_this.setData({
			item0: false, item1: false, item3: false, item4: false, item5: false, item6: false, item7: false, item8: false, item9: false
		})
		if (_this.data.item2 == false) {
			_this.setData({
				item2: true
			})
		} else {
			_this.setData({
				item2: false
			})
		}
	},
	changeli3: function () {
		let _this = this
		_this.setData({
			item0: false, item2: false, item1: false, item4: false, item5: false, item6: false, item7: false, item8: false, item9: false
		})
		if (_this.data.item3 == false) {
			_this.setData({
				item3: true
			})
		} else {
			_this.setData({
				item3: false
			})
		}
	},
	changeli4: function () {
		let _this = this
		_this.setData({
			item0: false, item2: false, item1: false, item3: false, item5: false, item6: false, item7: false, item8: false, item9: false
		})
		if (_this.data.item4 == false) {
			_this.setData({
				item4: true
			})
		} else {
			_this.setData({
				item4: false
			})
		}
	},
	changeli5: function () {
		let _this = this
		_this.setData({
			item0: false, item2: false, item1: false, item4: false, item3: false, item6: false, item7: false, item8: false, item9: false
		})
		if (_this.data.item5 == false) {
			_this.setData({
				item5: true
			})
		} else {
			_this.setData({
				item5: false
			})
		}
	},
	changeli6: function () {
		let _this = this
		_this.setData({
			item0: false, item2: false, item1: false, item4: false, item5: false, item3: false, item7: false, item8: false, item9: false
		})
		if (_this.data.item6 == false) {
			_this.setData({
				item6: true
			})
		} else {
			_this.setData({
				item6: false
			})
		}
	},
	changeli7: function () {
		let _this = this
		_this.setData({
			item0: false, item2: false, item1: false, item4: false, item5: false, item6: false, item3: false, item8: false, item9: false
		})
		if (_this.data.item7 == false) {
			_this.setData({
				item7: true
			})
		} else {
			_this.setData({
				item7: false
			})
		}
	},
	changeli8: function () {
		let _this = this
		_this.setData({
			item0: false, item2: false, item1: false, item4: false, item5: false, item6: false, item7: false, item3: false, item9: false
		})
		if (_this.data.item8 == false) {
			_this.setData({
				item8: true
			})
		} else {
			_this.setData({
				item8: false
			})
		}
	},
	changeli9: function () {
		let _this = this
		_this.setData({
			item0: false, item2: false, item1: false, item4: false, item5: false, item6: false, item7: false, item8: false, item3: false
		})
		if (_this.data.item9 == false) {
			_this.setData({
				item9: true
			})
		} else {
			_this.setData({
				item9: false
			})
		}
	},
	data: {
		username: '',
		userimage: '',
		useriphone:'',
		item0: false,
		item1: false,
		item2: false,
		item3: false,
		item4: false,
		item5: false,
		item6: false,
		item7: false,
		item8: false,
		item9: false,
	},
	onLoad: function () {
		let _this = this
		if(tt.getStorageSync('iphone') != ''){
			_this.setData({
			useriphone:tt.getStorageSync('iphone')
		})
		}
		tt.getSetting({
			success(res) {
				if (!res.authSetting['scope.userInfo']) {
					tt.authorize({
						scope: 'scope.userInfo',
						success() {
							tt.login({
								success(res) {
									tt.getUserInfo({
										success(res) {
											console.log(res);
											_this.setData({
												userimage: JSON.parse(res.rawData).avatarUrl
											})
											if (tt.getStorageSync('userName') == '') {
												console.log('aaa')
												_this.setData({
													username: JSON.parse(res.rawData).nickName,
												})
												tt.setStorageSync('userName', JSON.parse(res.rawData).nickName);
											}
											else {
												_this.setData({
													username: tt.getStorageSync('userName')
												})
											}
											tt.setStorageSync('userimage', JSON.parse(res.rawData).avatarUrl);
										},
										fail(res) {
											console.log(`1getUserInfo调用失败`);
										}
									});
								},
								fail(res) {
									console.log(`login调用失败`);
								}
							});
						}
					})
				} else {
					tt.login({
						success(res) {
							tt.getUserInfo({
								success(res) {
									console.log(res);
									_this.setData({
										userimage: JSON.parse(res.rawData).avatarUrl
									})
									if (tt.getStorageSync('userName') == '') {
										console.log('aaa')
										_this.setData({
											username: JSON.parse(res.rawData).nickName,
										})
										tt.setStorageSync('userName', JSON.parse(res.rawData).nickName);
									}
									else {
										_this.setData({
											username: tt.getStorageSync('userName')
										})
									}
									tt.setStorageSync('userimage', JSON.parse(res.rawData).avatarUrl);
								},
								fail(res) {
									console.log(`2getUserInfo调用失败`);
								}
							});
						},
						fail(res) {
							console.log(`login调用失败`);
						}
					});
				}
			}
		})
	},
})
