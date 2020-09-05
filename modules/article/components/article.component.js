
export default function Article({ title, body }) {
  return <div>
    <h1>{title}</h1>
    <div dangerouslySetInnerHTML={{__html: body}} />
  </div>;
}
