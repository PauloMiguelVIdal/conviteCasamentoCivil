import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, type PanInfo } from "framer-motion";
import {
  MapPin,
  Gift,
  Users,

  ChevronLeft,
  ChevronRight,

  Volume2,
  VolumeX,
  Heart,
  Sparkles,
  Copy,
  Check,
  ArrowLeft,
} from "lucide-react";

import musica from './assets/MUSICA/Edd_Sheeran_-_Perfect_(mp3.pm).mp3'

// ---------------------------------------------------------------------------
// IMPORTAÇÃO DAS IMAGENS LOCAIS
// ⚠️ Confira o case (maiúsculas/minúsculas) EXATO dos arquivos em src/assets.
// ---------------------------------------------------------------------------
import primeira from "./assets/primeira.jpeg";
import segunda from "./assets/segunda.jpeg";
import terceira from "./assets/Terceira.jpeg";
import quarta from "./assets/Quarta.jpeg";
import quinta from "./assets/Quinta.jpeg";

const FONT_IMPORT = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Italiana&family=Montserrat:wght@300;400;500;600&display=swap');
`;

const IMAGES = {
  capa: primeira,
  saveTheDate: segunda,
  detalhes: terceira,
  interativo: quarta,
  fechamento: quinta,
};

// ---------------------------------------------------------------------------
// COMPONENTE DE IMAGEM DE FUNDO — GARANTIDO
// ---------------------------------------------------------------------------
function BackgroundImage({ src, alt }: { src: string; alt: string }) {
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    if (!src) {
      console.error(
        `[ConviteKarinaHugo] Imagem "${alt}" veio undefined — o import da imagem falhou. Confira o caminho e o nome do arquivo em src/assets.`
      );
      setFailed(true);
      return;
    }
    setFailed(false);
  }, [src, alt]);

  return (
    <>
      <img
        src={src}
        alt=""
        onError={() =>
          console.error(
            `[ConviteKarinaHugo] Falha ao carregar a imagem "${alt}" no caminho: ${src}`
          )
        }
        style={{ display: "none" }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          backgroundImage: src ? `url(${src})` : undefined,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundColor: failed ? "#3a2e35" : undefined,
        }}
      />
    </>
  );
}

// ---------------------------------------------------------------------------
// MODAL PIX
// ---------------------------------------------------------------------------
function PixModal({ onClose }: { onClose: () => void }) {
  const [copied, setCopied] = useState(false);
  const pixKey = "74ddcf20-e95e-4ed2-933f-73c2023cd685";

  const copyPix = async () => {
    try {
      await navigator.clipboard.writeText(pixKey);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      alert("Copie manualmente: " + pixKey);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(0,0,0,0.6)",
        backdropFilter: "blur(4px)",
        padding: 16,
      }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        style={{
          background: "#FAF7F0",
          borderRadius: 16,
          padding: 24,
          maxWidth: 420,
          width: "100%",
          boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            color: "rgba(74,53,66,0.6)",
            background: "none",
            border: "none",
            marginBottom: 16,
            cursor: "pointer",
          }}
        >
          <ArrowLeft size={18} />
          <span style={{ fontFamily: "Montserrat", fontSize: 14 }}>Voltar</span>
        </button>

        <div style={{ textAlign: "center" }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: "50%",
              background: "rgba(201,166,107,0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 16px",
            }}
          >
            <Gift size={28} color="#C9A66B" />
          </div>

          <h3
            style={{
              fontSize: 24,
              marginBottom: 8,
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
            }}
          >
            Presentear os noivos
          </h3>

          <p
            style={{
              fontSize: 14,
              color: "rgba(74,53,66,0.7)",
              marginBottom: 24,
              fontFamily: "Montserrat",
            }}
          >
            Sua presença já é o melhor presente! Mas se desejar contribuir,
            aqui está nossa chave PIX:
          </p>

          <div
            style={{
              background: "#F5F0E8",
              borderRadius: 12,
              padding: 16,
              marginBottom: 24,
            }}
          >
            <p
              style={{
                fontSize: 11,
                color: "rgba(74,53,66,0.6)",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: 8,
                fontFamily: "Montserrat",
              }}
            >
              Chave PIX
            </p>
            <p
              style={{
                fontSize: 11,
                fontFamily: "monospace",
                color: "#4A3542",
                wordBreak: "break-all",
              }}
            >
              {pixKey}
            </p>
          </div>

          <button
            onClick={copyPix}
            style={{
              width: "100%",
              padding: "12px 0",
              borderRadius: 999,
              background: "#C9A66B",
              color: "white",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              fontFamily: "Montserrat",
            }}
          >
            {copied ? (
              <>
                <Check size={18} />
                <span>Copiado!</span>
              </>
            ) : (
              <>
                <Copy size={18} />
                <span>Copiar chave PIX</span>
              </>
            )}
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ---------------------------------------------------------------------------
// PLAYER DE MÚSICA - CONTROLE DE VOLUME
// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------
// PLAYER DE MÚSICA
// ---------------------------------------------------------------------------
function AudioPlayer() {
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.7);


  const audioRef = useRef<HTMLAudioElement | null>(null);
  const initializedRef = useRef(false);

  useEffect(() => {
    // Evita criar mais de uma instância do áudio
    if (initializedRef.current) return;

    initializedRef.current = true;

    const audio = new Audio(musica);

    audio.loop = true;
    audio.volume = 0.7;
    audio.muted = false;

    audioRef.current = audio;

    const startAudio = () => {
      if (!audio.paused) return;

      audio.play().catch(() => {});
    };

    // Tenta iniciar automaticamente
    startAudio();

    // Caso o navegador bloqueie autoplay,
    // inicia na primeira interação do usuário
    document.addEventListener("click", startAudio, { once: true });
    document.addEventListener("touchstart", startAudio, { once: true });
    document.addEventListener("keydown", startAudio, { once: true });

    return () => {
      document.removeEventListener("click", startAudio);
      document.removeEventListener("touchstart", startAudio);
      document.removeEventListener("keydown", startAudio);

      audio.pause();
      audio.src = "";

      audioRef.current = null;
      initializedRef.current = false;
    };
  }, []);

 
  // -------------------------------------------------------------------------
  // MUTE / UNMUTE
  // -------------------------------------------------------------------------
  const toggleMute = () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (isMuted) {
      // DESMUTAR
      // Apenas remove o mute.
      // A música NÃO é reiniciada.
      audio.muted = false;

      // Restaura o volume salvo caso ele esteja em 0
      if (volume === 0) {
        const restoreVolume = 0.7;

        setVolume(restoreVolume);
        audio.volume = restoreVolume;
      }

      setIsMuted(false);
    } else {
      // MUTAR
      // Não pausa e não chama play().
      // Apenas deixa o áudio inaudível.
      audio.muted = true;

      setIsMuted(true);
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 16,
        right: 16,
        zIndex: 50,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 8,
      }}
    >
      <button
        onClick={toggleMute}
        style={{
          width: 40,
          height: 40,
          borderRadius: "50%",
          background: "rgba(0,0,0,0.3)",
          backdropFilter: "blur(6px)",
          border: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          cursor: "pointer",
          transition: "all 0.2s",
        }}
      >
        {isMuted ? (
          <VolumeX size={18} />
        ) : (
          <Volume2 size={18} />
        )}
      </button>

     
    </div>
  );
}



// ---------------------------------------------------------------------------
// COMPONENTE PRINCIPAL
// ---------------------------------------------------------------------------
export default function ConviteKarinaHugo() {
  const [[page, direction], setPage] = useState<[number, number]>([0, 0]);
  const [showPix, setShowPix] = useState(false);

  const [viewportHeight, setViewportHeight] = useState<number>(
    typeof window !== "undefined" ? window.innerHeight : 800
  );

  useEffect(() => {
    const updateHeight = () => setViewportHeight(window.innerHeight);
    window.addEventListener("resize", updateHeight);
    window.addEventListener("orientationchange", updateHeight);
    return () => {
      window.removeEventListener("resize", updateHeight);
      window.removeEventListener("orientationchange", updateHeight);
    };
  }, []);

  const paginate = (dir: number) => {
    setPage(([current]) => {
      const next = current + dir;
      if (next < 0 || next >= PAGES.length) return [current, 0];
      return [next, dir];
    });
  };

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -70) paginate(1);
    else if (info.offset.x > 70) paginate(-1);
  };

  const ICONS = [
    {
      icon: MapPin,
      label: "Como chegar",
      action: () =>
        window.open("https://maps.app.goo.gl/VkbwCk7hXpSm2yAi9?g_st=iw", "_blank"),
    },
    {
      icon: Gift,
      label: "Para nos presentear",
      action: () => setShowPix(true),
    },
    {
      icon: Users,
      label: "Confirmar presença",
      action: () => {
        const msg = encodeURIComponent(
          "Olá! Confirmo minha presença no casamento de Karina e Hugo!"
        );
        window.open(`https://wa.me/5515997852923?text=${msg}`, "_blank");
      },
    },
  ];

  const PAGES = [
    {
      id: "capa",
      color: "#FAF7F0",
      image: IMAGES.capa,
      content: (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "33.333%",
            zIndex: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "0 24px",
          }}
        >
          <p style={{ fontSize: 10, letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: 16, fontFamily: "Montserrat" }}>
            Convidamos você para nosso casamento civil
          </p>
          <h1 style={{ fontSize: 56, lineHeight: 1.15, fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", margin: 0 }}>
            Karina
            <br />
            <span style={{ color: "#C9A66B" }}>&</span> Hugo
          </h1>
          <div style={{ marginTop: 24, display: "flex", justifyContent: "center", gap: 8 }}>
            <Heart size={16} color="#C9A66B" />
            <Heart size={16} color="#C9A66B" />
            <Heart size={16} color="#C9A66B" />
          </div>
        </div>
      ),
    },
    {
      id: "save-the-date",
      color: "#FAF7F0",
      image: IMAGES.saveTheDate,
      content: (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "33.333%",
            zIndex: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "0 24px",
          }}
        >
          <h2 style={{ fontSize: 40, letterSpacing: "0.1em", textTransform: "uppercase", fontFamily: "Italiana, serif", margin: 0 }}>
            Save
            <br />
            the
            <br />
            Date
          </h2>
          <div style={{ width: 48, height: 1, background: "#C9A66B", margin: "20px auto" }} />
          <p style={{ fontSize: 20, letterSpacing: "0.1em", fontFamily: "'Cormorant Garamond', serif" }}>
            16 <span style={{ color: "#C9A66B" }}>·</span> JANEIRO <span style={{ color: "#C9A66B" }}>·</span> 2027
          </p>
        </div>
      ),
    },
    {
      id: "detalhes",
      color: "#4A3542",
      image: IMAGES.detalhes,
      overlayLight: true,
      content: (
        <div style={{ position: "relative", zIndex: 10, textAlign: "center", padding: "0 24px", color: "#4A3542" }}>
          <p style={{ fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 4, fontFamily: "Montserrat" }}>
            A realizar-se no dia
          </p>
          <div style={{ width: 48, height: 1, background: "#C9A66B", margin: "0 auto 12px" }} />
          <p style={{ fontSize: 28, marginBottom: 4, fontFamily: "'Cormorant Garamond', serif" }}>
            20 <span style={{ color: "#C9A66B" }}>|</span> 03 <span style={{ color: "#C9A66B" }}>|</span> 2027
          </p>
          {/* <p style={{ fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8, fontFamily: "Montserrat" }}>
            Sábado, às 19h00
          </p> */}
          <p style={{ fontSize: 12, color: "rgba(74,53,66,0.7)", fontFamily: "Montserrat" }}>
            Local: Espaço aconchego
          </p>
        </div>
      ),
    },
    {
      id: "interativo",
      color: "#4A3542",
      image: IMAGES.interativo,
      content: (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "33.333%",
            zIndex: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "0 24px",
            backgroundColor: 'white',
            opacity: '90%'
          }}
        >
          <h3 style={{ fontSize: 22, marginBottom: 4, fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}>
            Toque nos ícones
          </h3>
          <p style={{ fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(74,53,66,0.6)", marginBottom: 16, fontFamily: "Montserrat" }}>
            para interagir
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, maxWidth: 300, margin: "0 auto" }}>
            {ICONS.map(({ icon: Icon, label, action }, i) => (
              <button
                key={i}
                onClick={action}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 4,
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                <span
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    background: "rgba(155,138,168,0.2)",
                    border: "1px solid rgba(155,138,168,0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Icon size={18} color="#6b5a78" />
                </span>
                <span style={{ fontSize: 8, lineHeight: 1.3, color: "rgba(74,53,66,0.8)", fontFamily: "Montserrat" }}>
                  {label}
                </span>
              </button>
            ))}
          </div>
          <div style={{ marginTop: 12, display: "flex", alignItems: "center", justifyContent: "center", gap: 8, color: "#C9A66B" }}>
            <Sparkles size={12} />
            <span style={{ fontSize: 8, letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "Montserrat" }}>
              Interaja
            </span>
            <Sparkles size={12} />
          </div>
        </div>
      ),
    },
    {
      id: "fechamento",
      color: "#FAF7F0",
      image: IMAGES.fechamento,
      content: (
        <div style={{ position: "relative", zIndex: 10, textAlign: "center", padding: "0 24px" }}>
          <h3 style={{ fontSize: 40, fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", margin: 0 }}>
            Esperamos
            <br />
            <span style={{ color: "#C9A66B" }}>por você</span>
          </h3>
          <div style={{ marginTop: 24, display: "flex", justifyContent: "center", gap: 12 }}>
            <Heart size={20} color="#C9A66B" />
            <Heart size={20} color="#C9A66B" fill="#C9A66B" />
            <Heart size={20} color="#C9A66B" />
          </div>
        </div>
      ),
    },
  ];

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = IMAGES.capa;
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  useEffect(() => {
    [PAGES[page + 1], PAGES[page - 1]].forEach((neighbor) => {
      if (neighbor?.image) {
        const img = new window.Image();
        img.src = neighbor.image;
      }
    });
  }, [page]);

  const current = PAGES[page];
  const isFirst = page === 0;
  const isLast = page === PAGES.length - 1;

  const pageVariants = {
    enter: (dir: number) => ({
      rotateY: dir >= 0 ? -180 : 180,
      opacity: 0.5,
      scale: 0.8,
      x: dir >= 0 ? 150 : -150,
    }),
    center: { rotateY: 0, opacity: 1, scale: 1, x: 0 },
    exit: (dir: number) => ({
      rotateY: dir >= 0 ? 180 : -180,
      opacity: 0.5,
      scale: 0.8,
      x: dir >= 0 ? -150 : 150,
    }),
  };

  return (
    <>
      <style>{`
        ${FONT_IMPORT}
        html, body, #root {
          width: 100%;
          height: 100%;
          margin: 0;
          padding: 0;
          overflow: hidden;
          background: #1a1418;
        }
        * { box-sizing: border-box; }
        
        /* Estilização do slider para navegadores */
        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #C9A66B;
          cursor: pointer;
        }
        input[type="range"]::-moz-range-thumb {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #C9A66B;
          cursor: pointer;
          border: none;
        }
      `}</style>

      <AudioPlayer />

      <AnimatePresence>{showPix && <PixModal onClose={() => setShowPix(false)} />}</AnimatePresence>

      <main
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: viewportHeight,
          overflow: "hidden",
          background: "#1a1418",
        }}
      >
        <div style={{ position: "relative", width: "100%", height: "100%", perspective: 1400, perspectiveOrigin: "center center" }}>
          <AnimatePresence custom={direction} initial={false} mode="popLayout">
            <motion.section
              key={current.id}
              custom={direction}
              variants={pageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.8, ease: [0.6, 0.05, 0.2, 0.95] }}
              drag="x"
              dragElastic={0.15}
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={handleDragEnd}
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                color: current.color,
                transformOrigin: direction >= 0 ? "left center" : "right center",
                transformStyle: "preserve-3d",
                touchAction: "none",
                WebkitBackfaceVisibility: "hidden",
                backfaceVisibility: "hidden",
                boxShadow: "0 30px 80px rgba(0,0,0,0.4)",
                cursor: "grab",
              }}
            >
              {current.image && <BackgroundImage src={current.image} alt={current.id} />}

              {current.id === "capa" && (
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.1), rgba(0,0,0,0.6))" }} />
              )}
              {current.id === "save-the-date" && (
                <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.5)" }} />
              )}
              {current.overlayLight && (
                <div style={{ position: "absolute", inset: 0, background: "rgba(250,247,240,0.8)", backdropFilter: "blur(4px)" }} />
              )}
              {current.id === "fechamento" && (
                <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.4)" }} />
              )}

              {current.content}
            </motion.section>
          </AnimatePresence>

          <button
            onClick={() => paginate(-1)}
            disabled={isFirst}
            style={{
              position: "absolute",
              left: 12,
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 30,
              width: 44,
              height: 44,
              borderRadius: "50%",
              background: "rgba(0,0,0,0.3)",
              backdropFilter: "blur(6px)",
              border: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              opacity: isFirst ? 0 : 1,
              cursor: isFirst ? "default" : "pointer",
              transition: "opacity 0.2s",
            }}
          >
            <ChevronLeft size={22} color="white" />
          </button>

          <button
            onClick={() => paginate(1)}
            disabled={isLast}
            style={{
              position: "absolute",
              right: 12,
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 30,
              width: 44,
              height: 44,
              borderRadius: "50%",
              background: "rgba(0,0,0,0.3)",
              backdropFilter: "blur(6px)",
              border: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              opacity: isLast ? 0 : 1,
              cursor: isLast ? "default" : "pointer",
              transition: "opacity 0.2s",
            }}
          >
            <ChevronRight size={22} color="white" />
          </button>

          <div style={{ position: "absolute", bottom: "max(2rem, env(safe-area-inset-bottom))", left: "50%", transform: "translateX(-50%)", zIndex: 30, display: "flex", gap: 8 }}>
            {PAGES.map((p, i) => (
              <button
                key={p.id}
                onClick={() => {
                  const dir = i > page ? 1 : -1;
                  setPage([i, dir]);
                }}
                style={{
                  height: 6,
                  width: i === page ? 32 : 8,
                  borderRadius: 999,
                  background: i === page ? "#C9A66B" : "rgba(255,255,255,0.3)",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.3s",
                }}
              />
            ))}
          </div>

          {isFirst && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              style={{
                position: "absolute",
                bottom: "max(4.5rem, calc(env(safe-area-inset-bottom) + 3rem))",
                left: "50%",
                transform: "translateX(-50%)",
                zIndex: 30,
                display: "flex",
                alignItems: "center",
                gap: 8,
                color: "#FAF7F0",
                background: "rgba(0,0,0,0.2)",
                backdropFilter: "blur(4px)",
                padding: "8px 16px",
                borderRadius: 999,
              }}
            >
              <motion.div animate={{ x: [0, 10, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
                <ChevronRight size={16} strokeWidth={1.5} />
              </motion.div>
              <span style={{ fontSize: 10, letterSpacing: "0.25em", textTransform: "uppercase", fontFamily: "Montserrat" }}>
                deslize para virar
              </span>
              <motion.div animate={{ x: [0, -10, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
                <ChevronLeft size={16} strokeWidth={1.5} />
              </motion.div>
            </motion.div>
          )}
        </div>
      </main>
    </>
  );
}