import { registerBlockType } from '@wordpress/blocks';
import { TextControl, DatePicker, Button, ColorPicker, SelectControl } from '@wordpress/components';
import { MediaUpload, InspectorControls, useBlockProps } from '@wordpress/block-editor';

/**
 *
 * Here I'm using the React Extended for Gutenberg Blocks
 *
 *
 */

registerBlockType('thrivedx-test-plugin/custom-fields-block', {
    title: 'Custom Fields Block',
    icon: 'list-view',
    category: 'design',
    attributes: {
        customText: {
            type: 'string',
            default: '',
        },
        customDate: {
            type: 'string',
            default: '',
        },
        customImage: {
            type: 'string',
            default: '',
        },
        textColor: {
            type: 'string',
            default: '#000000',
        },
        imageClass: {
            type: 'string',
            default: 'default-image-class',
        },
    },
    edit: ({ attributes, setAttributes }) => {
        const blockProps = useBlockProps();
        const { customText, customDate, customImage, textColor, imageClass } = attributes;

        const onSelectImage = (media) => {
            setAttributes({ customImage: media.url });
        };

        // formating the date to be human reading
        function formatDate(isoDateString) {
            if (!isoDateString) return '';

            const date = new Date(isoDateString);
            const month = `${date.getMonth() + 1}`.padStart(2, '0');
            const day = `${date.getDate()}`.padStart(2, '0');
            const year = date.getFullYear();

            return `${month}-${day}-${year}`;
        }

        // The custom Fields for the data in the plugin. Added customization for image and text, chosing a border radius for image and color for text. Just as an example in how build it
        return (
            <div {...blockProps}>
                <InspectorControls>
                    <div className="flex flex-col p-6 w-full">
                        <TextControl
                            label="Custom Text"
                            value={customText}
                            onChange={(value) => setAttributes({ customText: value })}
                        />
                        <div className="mb-6">
                            <DatePicker
                                currentDate={customDate}
                                onChange={(newDate) => {
                                    const formattedDate = formatDate(newDate);
                                    setAttributes({ customDate: formattedDate });
                                }}
                            />
                        </div>
                        <div className="border rounded">
                            <MediaUpload
                                onSelect={onSelectImage}
                                allowedTypes={['image']}
                                value={customImage}
                                render={({ open }) => (
                                    <Button onClick={open}>Choose Image</Button>
                                )}
                            />
                        </div>
                        <div className='my-6'>
                            <p>Custom Text Color</p>
                            <ColorPicker
                                color={textColor}
                                onChangeComplete={(newColor) => setAttributes({ textColor: newColor.hex })}
                                disableAlpha
                            />
                        </div>
                        <div className='mb-6'>
                            <SelectControl
                                label="Image Class"
                                value={imageClass}
                                options={[
                                    { label: 'Default', value: 'default-image-class' },
                                    { label: 'Rounded', value: 'rounded-image-class' },
                                    { label: 'Circle', value: 'circle-image-class' },
                                ]}
                                onChange={(selectedClass) => setAttributes({ imageClass: selectedClass })}
                            />
                        </div>
                    </div>
                </InspectorControls>
                <div>
                    <p style={{ color:textColor }} className='text-front'>Custom Text: {customText}</p>
                    <p className='text-front'>Custom Date: {customDate}</p>
                    {customImage && <img src={customImage} alt="Custom" className={imageClass} />}
                </div>
            </div>
        );
    },
    save: ({ attributes }) => {
        const { customText, customDate, customImage, textColor, imageClass } = attributes;
        return (
            <div>
                <p style={{ color:textColor }} className='text-front'>Custom Text: {customText}</p>
                <p className='text-front'>Custom Date: {customDate}</p>
                {customImage && <img src={customImage} alt="Custom" className={imageClass} />}
            </div>
        );
    },
});
