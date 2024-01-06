

function Formularios() {
  
  const pas = [
    {
      content: "Utiles",
      url: "https://drive.google.com/file/d/1UZz-_NSkOWZSN3B15x_-DrVPrOhqqWb3/view?usp=sharing",
    },
    {
      content: "Estimulo Secundario",
      url: "https://drive.google.com/file/d/18MhZh4IW-ygWE5QlhJdt4wlL4TZ96Y4v/view?usp=sharing",
    },
    {
      content: "Estudios Especiales",
      url: "https://drive.google.com/file/d/18HBFnGYSyqbp7uX0Z0foki3282b63fl2/view?usp=sharing",
    },
    {
      content: "Casamiento",
      url: "https://drive.google.com/file/d/17sGf3rqPI80gjIMdUdyerWEOT1o41SaD/view?usp=sharing",
    },
    {
      content: "Luna de Miel",
      url: "https://drive.google.com/file/d/18Cg6WDQzb_xRmrQI6wBvS8WRBsZSy9AA/view?usp=sharing",
    },
    {
      content: "Natalidad",
      url: "https://drive.google.com/file/d/17nfeaeIHacwBmgqM7uFPoMTmo5fAhc_D/view?usp=sharing",
    },
    {
      content: "Nacimiento",
      url: "https://drive.google.com/file/d/17vwePMBpQ0e2UqM-CXctqI62OPOhDtOF/view?usp=sharing",
    },
    {
      content: "Premio Jubilado",
      url: "https://drive.google.com/file/d/185rLUTalH7xmMC8G_XJ_P_v7B2oaJktb/view?usp=sharing",
    }
  ]

  return (
    <div>
                <table className="w-[90%] m-auto divide-y divide-gray-200 mt-5 rounded-xl overflow-hidden">
                  <tbody className="bg-white divide-y divide-gray-200">
                    {pas.map((pasItem, index) => (
                      <tr key={index}>
                        <td className="px-6 py-3 bg-greenUF text-left text-xs leading-4 font-bold text-slate-300 uppercase tracking-wider">{pasItem.content}</td>
                        <td className="px-6 py-3 bg-greenUF text-left text-xs leading-4 font-bold text-slate-300 uppercase tracking-wider"><a href={pasItem.url} className="font-bold text-slate-300">Descargar Formulario</a></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
  )
}

export default Formularios