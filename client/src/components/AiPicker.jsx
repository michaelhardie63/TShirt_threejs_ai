import React from 'react';

import CustomiseButton from './CustomiseButton';

const AiPicker = ({ prompt, setPrompt, generatingImg, handleSubmit }) => {
    return (
        <div className="aipicker-container">
            <textarea 
                placeholder="Ask AI..."
                rows={5}
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="aipicker-textarea"
            />
            <div className="flex flex-wrap gap-3">
                {generatingImg ? (
                    <CustomiseButton 
                        type="outline"
                        title="Asking AI..."
                        customStyles="text-xs"
                    />
                ) : (
                    <>
                        <CustomiseButton 
                            type="outline"
                            title="AI Logo"
                            handleClick={() => handleSubmit("logo")}
                            customStyles="text-xs"
                            disabled={true}
                        />

                        <CustomiseButton 
                            type="filled"
                            title="AI Full"
                            handleClick={() => handleSubmit("full")}
                            customStyles="text-xs"
                            disabled={true}
                        />
                    </>
                )}
            </div>
        </div>
    )
}

export default AiPicker;
