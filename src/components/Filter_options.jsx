import React, { useEffect } from 'react'

export default function FilterOptions() {
    useEffect(() => {
        const applyFilters = () => {
            const image = document.querySelector('.image')
            if (!image) return
            const saturate = document.getElementById('saturate')?.value || 100
            const brightness = document.getElementById('brightness')?.value || 100
            const contrast = document.getElementById('contrast')?.value || 100
            const hue = document.getElementById('hue')?.value || 0
            const grayscale = document.getElementById('grayscale')?.value || 0
            const invert = document.getElementById('invert')?.value || 0
            const sepia = document.getElementById('sepia')?.value || 0
            const opacity = document.getElementById('opacity')?.value || 100
            const blur = document.getElementById('blur')?.value || 0

            image.style.filter = `
        saturate(${saturate}%)
        brightness(${brightness}%)
        contrast(${contrast}%)
        hue-rotate(${hue}deg)
        grayscale(${grayscale}%)
        invert(${invert}%)
        sepia(${sepia}%)
        opacity(${opacity}%)
        blur(${blur}px)
        `
        }

        document.querySelectorAll('.slider').forEach(slider => {
            slider.addEventListener('input', applyFilters)
        })

        document.querySelectorAll('.Selection span').forEach(span => {
            span.addEventListener('click', () => {
                const filter = span.getAttribute('data-filter')
                const slider = document.getElementById(filter)
                if (slider) {
                    applyFilters()
                    document.querySelectorAll('.slider').forEach(s => {
                        s.parentElement.style.display = s.id === filter ? 'block' : 'none'
                    })
                }
            })
        })
    }, [])

    return (
        <>
            <div className="Selection">
                <span data-filter="saturate">
                    <img
                        src="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/icons/brightness-low.svg"
                        alt="Saturación"
                        width="24"
                        height="24"
                    />
                </span>
                <span data-filter="brightness">
                    <img
                        src="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/icons/brightness-high.svg"
                        alt="Brightness icon"
                        width="24"
                        height="24"
                    />
                </span>
                <span data-filter="contrast">
                    <img
                        src="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/icons/brightness-alt-low-fill.svg"
                        alt="Contraste"
                        width="24"
                        height="24"
                    />
                </span>
                <span data-filter="hue">
                    <img
                        src="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/icons/palette.svg"
                        alt="Hue icon"
                        width="24"
                        height="24"
                    />
                </span>
                <span data-filter="grayscale">
                    <img
                        src="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/icons/brush.svg"
                        alt="Grayscale icon"
                        width="24"
                        height="24"
                    />
                </span>
                <span data-filter="invert">
                    <img
                        src="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/icons/sunset.svg"
                        alt="Invert icon"
                        width="24"
                        height="24"
                    />
                </span>
                <span data-filter="sepia">
                    <img
                        src="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/icons/droplet.svg"
                        alt="Sepia icon"
                        width="24"
                        height="24"
                    />
                </span>
                <span data-filter="opacity">
                    <img
                        src="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/icons/eye.svg"
                        alt="Opacity icon"
                        width="24"
                        height="24"
                    />
                </span>
                <span data-filter="blur">
                    <img
                        src="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/icons/cloud-haze2-fill.svg"
                        alt="Blur icon"
                        width="24"
                        height="24"
                    />
                </span>
            </div>
            <div className="Container_Filters">
                <div className="Saturate">
                    <input type="range" min="0" max="200" defaultValue="100" className="slider" id="saturate" />
                    <label htmlFor="saturate">Saturate</label>
                </div>
                <div className="Brightness">
                    <input type="range" min="0" max="200" defaultValue="100" className="slider" id="brightness" />
                    <label htmlFor="brightness">Brightness</label>
                </div>
                <div className="Contrast">
                    <input type="range" min="0" max="200" defaultValue="100" className="slider" id="contrast" />
                    <label htmlFor="contrast">Contrast</label>
                </div>
                <div className="Hue">
                    <input type="range" min="0" max="360" defaultValue="0" className="slider" id="hue" />
                    <label htmlFor="hue">Hue</label>
                </div>
                <div className="Grayscale">
                    <input type="range" min="0" max="100" defaultValue="0" className="slider" id="grayscale" />
                    <label htmlFor="grayscale">Grayscale</label>
                </div>
                <div className="Invert">
                    <input type="range" min="0" max="100" defaultValue="0" className="slider" id="invert" />
                    <label htmlFor="invert">Invert</label>
                </div>
                <div className="Sepia">
                    <input type="range" min="0" max="100" defaultValue="0" className="slider" id="sepia" />
                    <label htmlFor="sepia">Sepia</label>
                </div>
                <div className="Opacity">
                    <input type="range" min="0" max="100" defaultValue="100" className="slider" id="opacity" />
                    <label htmlFor="opacity">Opacity</label>
                </div>
                <div className="Blur">
                    <input type="range" min="0" max="100" defaultValue="0" className="slider" id="blur" />
                    <label htmlFor="blur">Blur</label>
                </div>
            </div>
        </>
    )
}
