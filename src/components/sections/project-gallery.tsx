"use client";

import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

type ProjectImage = {
  src: string;
  alt: string;
};

type ProjectGalleryProps = {
  images: ProjectImage[];
  title: string;
};

export function ProjectGallery({ images, title }: ProjectGalleryProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const hasMultipleImages = images.length > 1;

  const showPrevious = useCallback(() => {
    setCurrentIndex((index) => (index - 1 + images.length) % images.length);
  }, [images.length]);

  const showNext = useCallback(() => {
    setCurrentIndex((index) => (index + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
      if (event.key === "ArrowLeft" && hasMultipleImages) showPrevious();
      if (event.key === "ArrowRight" && hasMultipleImages) showNext();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [hasMultipleImages, isOpen, showNext, showPrevious]);

  const handleTouchEnd = (event: React.TouchEvent) => {
    if (touchStartX.current === null || !hasMultipleImages) return;

    const distance = event.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(distance) > 50) {
      if (distance > 0) showPrevious();
      else showNext();
    }
    touchStartX.current = null;
  };

  const currentImage = images[currentIndex];

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setCurrentIndex(0);
          setIsOpen(true);
        }}
        className="group relative block aspect-[16/10] w-full cursor-zoom-in overflow-hidden rounded-xl border border-white/10 bg-[#0c1423] text-left"
        aria-label={`Abrir galeria do projeto ${title}`}
      >
        <Image
          src={images[0].src}
          alt={images[0].alt}
          fill
          sizes="(max-width: 767px) 100vw, 50vw"
          className="object-contain p-2 transition duration-300 group-hover:scale-[1.02]"
        />
        <span className="absolute inset-0 flex items-end justify-end bg-gradient-to-t from-black/50 via-transparent to-transparent p-4 opacity-0 transition group-hover:opacity-100 group-focus-visible:opacity-100">
          <span className="inline-flex items-center gap-2 rounded-full bg-black/70 px-3 py-2 text-xs font-semibold text-white backdrop-blur">
            <Maximize2 className="size-4" />
            Ver projeto
          </span>
        </span>
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex flex-col bg-black/95 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={`Galeria do projeto ${title}`}
          onClick={() => setIsOpen(false)}
        >
          <div className="flex items-center justify-between gap-4 px-4 py-3 sm:px-6">
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-white">{title}</p>
              <p className="mt-0.5 text-xs text-slate-400">
                Página {currentIndex + 1} de {images.length}
              </p>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="grid size-11 shrink-0 place-items-center rounded-full border border-white/15 bg-white/10 text-white transition hover:bg-white/20"
              aria-label="Fechar galeria"
            >
              <X className="size-5" />
            </button>
          </div>

          <div
            className="relative min-h-0 flex-1"
            onClick={(event) => event.stopPropagation()}
            onTouchStart={(event) => {
              touchStartX.current = event.touches[0].clientX;
            }}
            onTouchEnd={handleTouchEnd}
          >
            <Image
              key={currentImage.src}
              src={currentImage.src}
              alt={currentImage.alt}
              fill
              priority
              sizes="100vw"
              className="object-contain px-4 pb-4 sm:px-16"
            />

            {hasMultipleImages && (
              <>
                <button
                  type="button"
                  onClick={showPrevious}
                  className="absolute left-3 top-1/2 z-10 grid size-11 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-black/60 text-white transition hover:bg-white/20 sm:left-6"
                  aria-label="Página anterior"
                >
                  <ChevronLeft className="size-6" />
                </button>
                <button
                  type="button"
                  onClick={showNext}
                  className="absolute right-3 top-1/2 z-10 grid size-11 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-black/60 text-white transition hover:bg-white/20 sm:right-6"
                  aria-label="Próxima página"
                >
                  <ChevronRight className="size-6" />
                </button>
              </>
            )}
          </div>

          {hasMultipleImages && (
            <div
              className="flex justify-center gap-2 overflow-x-auto px-4 py-3"
              onClick={(event) => event.stopPropagation()}
            >
              {images.map((image, index) => (
                <button
                  key={image.src}
                  type="button"
                  onClick={() => setCurrentIndex(index)}
                  className={`relative h-14 w-24 shrink-0 overflow-hidden rounded-md border transition ${
                    index === currentIndex
                      ? "border-blue-400 ring-2 ring-blue-400/30"
                      : "border-white/15 opacity-55 hover:opacity-100"
                  }`}
                  aria-label={`Abrir página ${index + 1}`}
                  aria-current={index === currentIndex ? "true" : undefined}
                >
                  <Image src={image.src} alt="" fill sizes="96px" className="object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
}
