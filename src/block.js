import { registerBlockType } from '@wordpress/blocks';
import { TextControl, DatePicker, Button } from '@wordpress/components';
import { MediaUpload, InspectorControls, useBlockProps } from '@wordpress/block-editor';

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
    },
    edit: ({ attributes, setAttributes }) => {
        const blockProps = useBlockProps();
        const { customText, customDate, customImage } = attributes;

        const onSelectImage = (media) => {
            setAttributes({ customImage: media.url });
        };

        function formatDate(isoDateString) {
            if (!isoDateString) return '';

            const date = new Date(isoDateString);
            const month = `${date.getMonth() + 1}`.padStart(2, '0'); // getMonth() is zero-based
            const day = `${date.getDate()}`.padStart(2, '0');
            const year = date.getFullYear();

            return `${month}-${day}-${year}`;
        }

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
                    </div>
                </InspectorControls>
                <div>
                    <p>Custom Text: {customText}</p>
                    <p>Custom Date: {customDate}</p>
                    {customImage && <img src={customImage} alt="Custom" />}
                </div>
            </div>
        );
    },
    save: ({ attributes }) => {
        const { customText, customDate, customImage } = attributes;
        return (
            <div>
                <p>Custom Text: {customText}</p>
                <p>Custom Date: {customDate}</p>
                {customImage && <img src={customImage} alt="Custom" />}
            </div>
        );
    },
});
