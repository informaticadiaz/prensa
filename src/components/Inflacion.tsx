import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryLabel } from 'victory';

const Inflacion = () => {
  const data = [
    { month: 'Ene', inflacion: 2.5 },
    { month: 'Feb', inflacion: 3.2 },
    { month: 'Mar', inflacion: 4.0 },
    { month: 'Abr', inflacion: 3.8 },
    { month: 'May', inflacion: 2.7 },
    { month: 'Jun', inflacion: 3.5 },
    { month: 'Jul', inflacion: 4.1 },
    { month: 'Ago', inflacion: 3.9 },
    { month: 'Sep', inflacion: 2.8 },
    { month: 'Oct', inflacion: 3.3 },
    { month: 'Nov', inflacion: 4.2 },
    { month: 'Dic', inflacion: 3.7 },
  ];

  const totalInflacionAnual = data.reduce((accumulator, currentValue) => accumulator + currentValue.inflacion, 0);

  return (
    <div style={{ width: '100%', maxWidth: '600px', margin: 'auto', background: 'transparent' }}>
      <h2 style={{ textAlign: 'center' }}>Gráfico de Inflación Mensual - Año 2022</h2>
      <VictoryChart
        width={600}
        height={400}
        domainPadding={20}
        theme={VictoryTheme.material}
        containerComponent={<svg viewBox="0 0 600 400" preserveAspectRatio="xMidYMid meet" />}
        style={{ parent: { background: 'transparent' } }}
      >
        <VictoryAxis
          dependentAxis
          tickFormat={(x) => `${x}%`}
          style={{ grid: { stroke: 'none' } }}
        />
        <VictoryAxis
          tickValues={data.map((item) => item.month)}
          tickFormat={data.map((item) => item.month)}
          style={{
            tickLabels: { fontSize: 10 },
            grid: { stroke: 'none' },
            axis: { stroke: 'rgba(0, 0, 0, 0)' },
            ticks: { stroke: 'rgba(0, 0, 0, 0)' },
          }}
        />
        <VictoryBar
          data={data}
          x="month"
          y="inflacion"
          horizontal={true}
          style={{
            data: {
              fill: 'rgba(54, 162, 235, 0.6)',
              width: 15,
              padding: 8,
              stroke: 'rgba(54, 162, 235, 1)',
              strokeWidth: 1,
            }
          }}
          labelComponent={<VictoryLabel dx={-6} dy={0} textAnchor="end" style={{ fill: 'white' }} />}
          labels={({ datum }) => `${datum.inflacion}%`}
        />
        <VictoryLabel
          text={`La inflación anual del año 2022 fue: ${totalInflacionAnual.toFixed(2)}%`}
          x={300}
          y={30}
          textAnchor="middle"
          style={{ fill: 'white', fontSize: 14 }} // Establecer el color del texto en blanco
        />
      </VictoryChart>
    </div>
  );
};

export default Inflacion;
