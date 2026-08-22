'use client';

import { useState } from 'react';

export default function HeroShareButton({ appName }) {
  const [isOpen, setIsOpen] = useState(false);

  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareText = encodeURIComponent(`Check out ${appName} APK - amazing game with great features!`);
  const shareUrl = encodeURIComponent(currentUrl);

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(true)}
        className="text-black font-black uppercase tracking-wider hover:underline cursor-pointer text-xs bg-black/5 px-3 py-1.5 rounded-md border border-black/10 transition"
      >
        Share App
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4">
          
          {/* Main Modal Box - Matched with button/page light style */}
          <div className="bg-[#e2e6df] text-gray-900 rounded-2xl w-full max-w-sm shadow-2xl border border-black/10 overflow-hidden relative animate-in fade-in zoom-in duration-200">
            
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-black/10 bg-black/5">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-black"></span>
                <h3 className="text-xs font-black tracking-widest uppercase text-black">
                  SHARE THIS PAGE
                </h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-black/60 hover:text-black transition p-1 text-sm font-bold cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Icons Grid (3x3) */}
            <div className="p-5">
              <div className="grid grid-cols-3 gap-3">
                
                {/* LinkedIn */}
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-20 bg-[#0077b5] hover:opacity-90 rounded-xl flex flex-col items-center justify-center gap-1 transition shadow-sm text-white"
                  title="LinkedIn"
                >
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  <span className="text-[10px] font-bold">LinkedIn</span>
                </a>

                {/* Facebook */}
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-20 bg-[#1877f2] hover:opacity-90 rounded-xl flex flex-col items-center justify-center gap-1 transition shadow-sm text-white"
                  title="Facebook"
                >
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                  <span className="text-[10px] font-bold">Facebook</span>
                </a>

                {/* Twitter / X */}
                <a
                  href={`https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-20 bg-black hover:opacity-90 rounded-xl flex flex-col items-center justify-center gap-1 transition shadow-sm text-white"
                  title="Twitter / X"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                  <span className="text-[10px] font-bold">Twitter</span>
                </a>

                {/* WhatsApp */}
                <a
                  href={`https://api.whatsapp.com/send?text=${shareText}%20${shareUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-20 bg-[#25d366] hover:opacity-90 rounded-xl flex flex-col items-center justify-center gap-1 transition shadow-sm text-white"
                  title="WhatsApp"
                >
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                  <span className="text-[10px] font-bold">WhatsApp</span>
                </a>

                {/* Telegram */}
                <a
                  href={`https://t.me/share/url?url=${shareUrl}&text=${shareText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-20 bg-[#229ed9] hover:opacity-90 rounded-xl flex flex-col items-center justify-center gap-1 transition shadow-sm text-white"
                  title="Telegram"
                >
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.14-.26.26-.534.26l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.195 1.006.132.832.943z"/></svg>
                  <span className="text-[10px] font-bold">Telegram</span>
                </a>

                {/* Reddit */}
                <a
                  href={`https://www.reddit.com/submit?url=${shareUrl}&title=${shareText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-20 bg-[#ff4500] hover:opacity-90 rounded-xl flex flex-col items-center justify-center gap-1 transition shadow-sm text-white"
                  title="Reddit"
                >
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 12zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.221.73-.241 1.058-.048.328.193.483.582.368.946-.615 1.91-2.57 3.282-4.882 3.282s-4.267-1.372-4.882-3.282c-.115-.364.04-.753.368-.946.328-.193.75-.173 1.058.048 1.194-.856 2.85-1.418 4.674-1.488l.732-3.442 2.158.455c.046-.353.351-.613.71-.613zm-9.35 6.702c-.966 0-1.75.784-1.75 1.75s.784 1.75 1.75 1.75 1.75-.784 1.75-1.75-.784-1.75-1.75-1.75zm7.5 0c-.966 0-1.75.784-1.75 1.75s.784 1.75 1.75 1.75 1.75-.784 1.75-1.75-.784-1.75-1.75-1.75zm-3.75 4.316c-1.455 0-2.732.327-3.666.902-.34.209-.45.655-.241.996.209.34.655.45.996.241.734-.45 1.757-.739 2.911-.739s2.177.289 2.911.739c.34.209.786.099.996-.241.209-.34.099-.786-.241-.996-.934-.575-2.211-.902-3.666-.902z"/></svg>
                  <span className="text-[10px] font-bold">Reddit</span>
                </a>

                {/* Pinterest */}
                <a
                  href={`https://pinterest.com/pin/create/button/?url=${shareUrl}&description=${shareText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-20 bg-[#e60023] hover:opacity-90 rounded-xl flex flex-col items-center justify-center gap-1 transition shadow-sm text-white"
                  title="Pinterest"
                >
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.54 5.372 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/></svg>
                  <span className="text-[10px] font-bold">Pinterest</span>
                </a>

                {/* Email */}
                <a
                  href={`mailto:?subject=${shareText}&body=${shareUrl}`}
                  className="h-20 bg-[#555555] hover:opacity-90 rounded-xl flex flex-col items-center justify-center gap-1 transition shadow-sm text-white"
                  title="Email"
                >
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.611 3.746zm6.377 1.258l-5.003-4.068 5.003-3.879 5.003 3.879-5.003 4.068zm2.377-1.258l4.611-3.746v9.458l-4.611-5.712zm-8.877 1.834l3.651 2.969 3.651-2.969 4.36 5.395h-16.022l4.36-5.395z"/></svg>
                  <span className="text-[10px] font-bold">Email</span>
                </a>

              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}