		const origin = 'https://github.com/' + window.location.origin.replace(/^(https\:\/\/)(\S+?)\..*$/, '$2') + window.location.pathname.replace(/index\.html.*$/, '') + 'raw/master/'

		window.addEventListener('load', () => {
			const source = origin + '_zips/all.zip';

			document.body.insertAdjacentHTML('afterbegin',
				`<a download style="display: block;
	                                    width: 120px;
	                                    height: 30px;
	                                    line-height: 30px;
	                                    background-color: #5280F6;
	                                    color: #fff;
	                                    text-align: center;
	                                    text-decoration: none;
	                                    position: fixed;
										top: 65px;
										right: 20px;
										z-index: 99;"
				href="${source}">Download all</a>`
			)
			document.querySelectorAll('iframe')
				.forEach(i => {
					const zip = origin + '_zips/' + i.src.replace(/(^.*\/banners\/(.*)\/.*$)/, '$2') + '.zip'

					i.parentElement.insertAdjacentHTML('beforeend',
						`<a download target="_blank" style="display: block;
										font-size: 13px;
	                                    width: 80px;
	                                    height: 20px;
	                                    line-height: 20px;
	                                    color: #5280F6;
	                                    border: 1px solid #5280F6;
	                                    text-align: center;
	                                    text-decoration: none;
	                                    margin-top: 10px;"
						href="${zip}">Download</a>`
					)
				})
		})
