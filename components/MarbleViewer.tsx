"use client"

import { useEffect, useRef, useState } from "react"
import * as THREE from "three"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { Notification } from "@/components/Notification"

interface MarbleViewerProps {
  selectedMaterial: string | null
}

export function MarbleViewer({ selectedMaterial }: MarbleViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [showNotification, setShowNotification] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000,
    )
    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
    containerRef.current.appendChild(renderer.domElement)

    const loader = new GLTFLoader()
    loader.load(
      "/path/to/your/model.glb",
      (gltf) => {
        const model = gltf.scene
        scene.add(model)

        // Find the marble object
        let marbleObject: THREE.Mesh | null = null
        model.traverse((child) => {
          if (child instanceof THREE.Mesh && child.name === "marbre") {
            marbleObject = child
          }
        })

        if (!marbleObject) {
          setError("Marble object not found in the 3D model")
          return
        }

        // Set up camera position
        camera.position.z = 5

        // Animation loop
        function animate() {
          requestAnimationFrame(animate)
          renderer.render(scene, camera)
        }
        animate()

        // Update texture when selectedMaterial changes
        if (selectedMaterial && marbleObject.material instanceof THREE.MeshStandardMaterial) {
          const textureLoader = new THREE.TextureLoader()
          textureLoader.load(
            selectedMaterial,
            (texture) => {
              marbleObject!.material.map = texture
              marbleObject!.material.needsUpdate = true
            },
            undefined,
            (err) => {
              console.error("Error loading texture:", err)
              setError("Failed to load the selected marble texture")
            },
          )
        }
      },
      undefined,
      (err) => {
        console.error("Error loading 3D model:", err)
        setError("Failed to load the 3D model")
      },
    )

    // Clean up
    return () => {
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement)
      }
    }
  }, [selectedMaterial])

  return (
    <>
      <div ref={containerRef} className="w-full h-full" onClick={() => setShowNotification(true)} />
      <Notification
        isVisible={showNotification}
        onClose={() => setShowNotification(false)}
        message="Coming soon: We will change the color of the 3D model based on your selection. You will be able to visualize the model with the chosen stone."
      />
    </>
  )
}

