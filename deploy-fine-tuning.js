fetch('https://api.openai.com/v1/fine_tuning/jobs', {
  method: 'POST',
  body: JSON.stringify({
    /* 
     *  Step 1. Upload a *.jsonl file with training data to the OpenAI platform.
     *  Step 2. Get the file ID from the platform and replace the "[MODEL FILE ID]" with the file ID.
     *  Step 3. Replace [API KEY] with the API key from the OpenAI platform. API key can be found under the API keys section.
     *  Step 4. Set n_epochs to the number of training epochs, depending on the size of the training data.
     */
    "training_file": "[MODEL FILE ID]",
    "model": "gpt-3.5-turbo-1106",
    "hyperparameters": {
      "n_epochs": 30
    }
  }),
  headers: {
    "Content-Type": "application/json",
    'Authorization': `Bearer [API KEY]`
});
