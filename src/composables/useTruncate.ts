// TruncateTextComposable.ts
import { ref, computed } from 'vue';

export interface TruncateTextParams {
  text: string;
  maxLength: number;
}

interface TruncateTextResult {
  truncatedOutput: string;
  setTruncatedText: (newText: string) => void;
}

export function useTruncateText({ text, maxLength }: TruncateTextParams): TruncateTextResult {
  const truncatedText = ref(text);

  const truncatedOutput = computed(() => {
    if (truncatedText.value.length > maxLength) {
      return truncatedText.value.substring(0, maxLength) + '...';
    }
    return truncatedText.value;
  });

  function setTruncatedText(newText: string): void {
    truncatedText.value = newText;
  }

  return {
    truncatedOutput: truncatedOutput.value,
    setTruncatedText
  };
}
