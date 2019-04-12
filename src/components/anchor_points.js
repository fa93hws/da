const ANCHOR_POINTS = {
  POINT1: 'p1',
  POINT2: 'p2',
  POINT3: 'p3',
  POINT4: 'p4',
};

export function getId(point) {
  if (point in ANCHOR_POINTS) {
    return ANCHOR_POINTS[point];
  } else {
    throw new Error(`Anchor point ${point} can not be found`);    
  }
}

export const getHashUrl = (point) => '#' + getId(point);
