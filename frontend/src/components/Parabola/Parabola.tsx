interface ParabolaProps {
  a: number
  b: number
  c: number
  startX: number
  endX: number
  step: number
  h: number
}

const Parabola = ({ a, b, c, startX, endX, step, h }: ParabolaProps) => {
  const generateParabolaPoints = (
    a: number,
    b: number,
    c: number,
    startX: number,
    endX: number,
    step: number) => {
    const points = [];
    for (let x = startX; x <= endX; x += step) {
      const y = - a * (x - h / 2) * (x - h / 2) + b * (x - h / 2) + c;
      points.push({ x, y });
    }
    return points;
  };

  const createSvgPath = (points: any[]) => {
    let path = `M ${points[0].y} ${points[0].x}`;
    for (let i = 1; i < points.length; i++) {
      path += ` L ${points[i].y} ${points[i].x}`;
    }
    return path;
  };

  const points = generateParabolaPoints(a, b, c, startX, endX, step);
  const pathData = createSvgPath(points);

  return (
    <>
      <svg width="500" height={h} viewBox={`0 0 500 ${h}`} className="fixed z-0">
        <path d={pathData} stroke="#53B39C" fill="transparent" strokeWidth={5} />
      </svg>
    </>
  );
};

export default Parabola;
