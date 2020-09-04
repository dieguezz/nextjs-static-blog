import { useRouter } from 'next/router'

export default function article() {
    const router = useRouter()
    const { id } = router.query

return <div>I am an article with the id: {id}</div>
}