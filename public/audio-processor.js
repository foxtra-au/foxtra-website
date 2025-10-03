class AudioProcessor extends AudioWorkletProcessor {
  process(inputs, outputs, parameters) {
    const input = inputs[0];
    
    if (input.length > 0) {
      const inputData = input[0];
      
      // Send audio data to main thread
      this.port.postMessage(inputData);
    }
    
    return true;
  }
}

registerProcessor('audio-processor', AudioProcessor);
