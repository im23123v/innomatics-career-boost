import { useEffect } from "react";
import { Brain, Mic, MicOff } from "lucide-react";

const VoiceAssistant = () => {
  useEffect(() => {
    // Add 11Labs widget after component mounts
    const addVoiceWidget = () => {
      const widgetContainer = document.getElementById('elevenlabs-voice-widget');
      if (widgetContainer && !widgetContainer.querySelector('elevenlabs-convai')) {
        const voiceWidget = document.createElement('elevenlabs-convai');
        voiceWidget.setAttribute('agent-id', 'agent_5301k5nc36gvf4cs37mv5pwcr7zx');
        widgetContainer.appendChild(voiceWidget);
      }
    };

    // Wait for the script to load, then add widget
    const checkScript = () => {
      if (window.customElements && window.customElements.get('elevenlabs-convai')) {
        addVoiceWidget();
      } else {
        setTimeout(checkScript, 100);
      }
    };

    checkScript();
  }, []);

  return (
    <div className="w-full min-h-[200px] flex flex-col items-center justify-center bg-gradient-to-br from-primary/5 to-blue-500/5 rounded-xl border border-border/50">
      <div id="elevenlabs-voice-widget" className="w-full h-full flex items-center justify-center">
        {/* Fallback content while widget loads */}
        <div className="text-center space-y-4">
          <div className="relative">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center mx-auto">
              <Brain className="w-8 h-8 text-primary-foreground animate-pulse" />
            </div>
            <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
              <Mic className="w-3 h-3 text-white" />
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-2">
              Innomatics AI Assistant
            </h4>
            <p className="text-sm text-muted-foreground max-w-xs mx-auto">
              Click to start voice conversation with our AI assistant for career guidance
            </p>
          </div>
          <div className="text-xs text-muted-foreground">
            Agent ID: agent_5301k5nc36gvf4cs37mv5pwcr7zx
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoiceAssistant;