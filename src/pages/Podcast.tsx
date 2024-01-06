import MainLayout from "../Layout/MainLayout"

function Podcast() {
  return (
    <>
    <MainLayout>
    <div>
      <h2>Podcast</h2>
      <div className="mt-4">
      <h4>Eva Perón en el acto por el Día de la Lealtad.</h4>
      <iframe src="https://archive.org/embed/evita17ocutube1951" width="500" height="30" frameborder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen ></iframe>
      </div>
    </div>
    </MainLayout>
    </>
  )
}

export default Podcast