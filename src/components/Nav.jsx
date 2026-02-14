export default function Nav() {

    const pages = [
        {
            name: 'home',
            link: '/'
        },
        {
            name: 'about',
            link: '/about'
        },
        {
            name: 'menu',
            link: '/menu'
        },
        {
            name: 'reserve',
            link: '/reserve'
        }
    ]

    return (
        <>
            <nav>
                <ul>
                    {pages.map((page => {
                        return (
                            <li>{page.name}</li>
                        )
                    }))}
                </ul>
            </nav>
        </>
    )
}