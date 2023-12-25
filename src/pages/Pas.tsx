import MainLayout from "../Layout/MainLayout"

function Pas() {

  const pas = [
    {
      content: "Utiles",
      url: "https://drive.google.com/file/d/1UZz-_NSkOWZSN3B15x_-DrVPrOhqqWb3/view?usp=drive_link",
    },
    {
      content: "Estimulo Secundario",
      url: "https://drive.google.com/file/d/1UZz-_NSkOWZSN3B15x_-DrVPrOhqqWb3/view?usp=drive_link",
    },
    {
      content: "Natalidad",
      url: "https://drive.google.com/file/d/1UZz-_NSkOWZSN3B15x_-DrVPrOhqqWb3/view?usp=drive_link",
    },
    {
      content: "Natalidad",
      url: "https://drive.google.com/file/d/1UZz-_NSkOWZSN3B15x_-DrVPrOhqqWb3/view?usp=drive_link",
    },
    {
      content: "Utiles",
      url: "https://drive.google.com/file/d/1UZz-_NSkOWZSN3B15x_-DrVPrOhqqWb3/view?usp=drive_link",
    },
    {
      content: "Luna de Miel",
      url: "https://drive.google.com/file/d/1UZz-_NSkOWZSN3B15x_-DrVPrOhqqWb3/view?usp=drive_link",
    },
    {
      content: "Casamiento",
      url: "https://drive.google.com/file/d/1UZz-_NSkOWZSN3B15x_-DrVPrOhqqWb3/view?usp=drive_link",
    },
    {
     content: "Premio Jubilado",
     url: "https://drive.google.com/file/d/1UZz-_NSkOWZSN3B15x_-DrVPrOhqqWb3/view?usp=drive_link", 
    }
  ]

  return (
    <>
    <MainLayout>
    <div className="p-4">
    <h1 className="text-2xl font-bold text-blue-300">Plan de accion social</h1>
      <p className="text-blue-300 mt-2">Formularios del plan de accion social</p>
  <table className="w-full divide-y divide-gray-200 mt-5">
    <tbody className="bg-white divide-y divide-gray-200">
      {pas.map((pas) => (
        <tr>
          <td className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">{pas.content}</td>
          <td className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"><a href={pas.url} className="text-gray-500">Descargar Formulario</a></td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
    </MainLayout>
    </>
  )
}

export default Pas