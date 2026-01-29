'use client';

import Scene from '@/components/3d/Scene';
import FloatingShapes from '@/components/3d/FloatingShapes';
import ParticleField from '@/components/3d/ParticleField';
import InteractiveOrb from '@/components/3d/InteractiveOrb';
import WaveBackground from '@/components/3d/WaveBackground';
import GradientSphere from '@/components/3d/GradientSphere';
import GridPlane from '@/components/3d/GridPlane';

export default function Global3DBackground() {
    return (
        <Scene cameraPosition={[0, 0, 8]}>
            <GridPlane />
            <GradientSphere />
            <WaveBackground />
            <ParticleField />
            <FloatingShapes />
            <InteractiveOrb />
        </Scene>
    );
}
