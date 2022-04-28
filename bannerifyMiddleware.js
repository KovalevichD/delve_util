window.addEventListener('load', () => {
    const styles = document.createElement('link')
    const grid = document.querySelector('.grid')
    const iframes = document.querySelectorAll('iframe')

    styles.rel = 'stylesheet'
    document.head.appendChild(styles)
    styles.href = 'https://kovalevichd.github.io/delve_util/bannerifyMiddleware.css'

    grid.insertAdjacentHTML('afterbegin', `<a download="ads" class="download-all" href="/_zips/all.zip">Download ads</a>`)
    grid.insertAdjacentHTML('afterbegin', `
            <a download="backups" class="download-all" href="/_backups/all.zip">Download backups</a>`
    )

    iframes.forEach(i => {
        const zip = '/_zips/' + i.src.replace(/(^.*\/banners\/(.*)\/.*$)/, '$2') + '.zip'

        i.parentElement.insertAdjacentHTML('beforeend',
            `<a download class="download" href="${zip}">Download</a>`
        )
    })
})