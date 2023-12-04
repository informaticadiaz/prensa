import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryLabel } from 'victory';

const Inflacion = () => {
  const data = [
    { month: 'Ene', inflacion: 3.9 },
    { month: 'Feb', inflacion: 4.7 },
    { month: 'Mar', inflacion: 6.7 },
    { month: 'Abr', inflacion: 6.0 },
    { month: 'May', inflacion: 5.1 },
    { month: 'Jun', inflacion: 5.3 },
    { month: 'Jul', inflacion: 7.4 },
    { month: 'Ago', inflacion: 7.0 },
    { month: 'Sep', inflacion: 6.2 },
    { month: 'Oct', inflacion: 6.3 },
    { month: 'Nov', inflacion: 4.9 },
    { month: 'Dic', inflacion: 5.1 },
  ];

  

  return (
    <div style={{ width: '100%', maxWidth: '600px', margin: 'auto', background: 'transparent' }}>
      <h2 style={{ textAlign: 'center' }}>IPC - Año 2022</h2>
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
       
      </VictoryChart>
    </div>
  );
};

export default Inflacion;
