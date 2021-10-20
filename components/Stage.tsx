import { Canvas } from '@react-three/fiber';
import React, { useContext, useMemo } from 'react';
import { Curve, MeshToonMaterial, TubeGeometry, Vector2, Vector3 } from 'three';
import { ControlsContext } from '../contexts/ControlsProvider';

class CustomSinCurve extends Curve<Vector3> {
  frequency = 1;
  amplitude = 1;

  constructor(frequency = 1, amplitude = 1) {
    super();

    this.amplitude = amplitude;
    this.frequency = frequency;
  }

  getPoint(t: number, optionalTarget = new Vector3()) {
    const ty = Math.sin(t * this.frequency) * this.amplitude;

    return optionalTarget.set(t * 20, ty, 0);
  }
}

function useGeometry() {
  const { amplitude, frequency } = useContext(ControlsContext);

  const points: Vector2[] = [];
  for (let x = 0; x < 4; x += 0.01) {
    const y = Math.sin(x * frequency);
    points.push(new Vector2(x, y * amplitude));
  }

  return new TubeGeometry(
    new CustomSinCurve(frequency, amplitude),
    5000,
    0.06,
    2
  );
}

export const Stage: React.FC = () => {
  const curveMaterial = useMemo(
    () => new MeshToonMaterial({ color: 0x9d1ced }),
    []
  );
  const curveGeometry = useGeometry();

  return (
    <Canvas>
      <pointLight position={[10, 10, 10]} />
      <mesh
        position={[-10, 0, 0]}
        geometry={curveGeometry}
        material={curveMaterial}
      />
    </Canvas>
  );
};
