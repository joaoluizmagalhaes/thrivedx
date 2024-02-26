( function( blocks, element, editor ) {
    var el = element.createElement;
    var RichText = editor.RichText;

    blocks.registerBlockType( 'thrivedx-test-plugin/custom-block', {
        title: 'Simple Custom Field',
        icon: 'universal-access-alt',
        category: 'layout',
        attributes: {
            content: {
                type: 'string',
                source: 'html',
                selector: 'p',
            },
        },

        edit: function( props ) {
            var content = props.attributes.content;
            function onChangeContent( newContent ) {
                props.setAttributes( { content: newContent } );
            }

            return el(
                RichText,
                {
                    tagName: 'p',
                    className: props.className,
                    value: content,
                    onChange: onChangeContent,
                }
            );
        },

        save: function( props ) {
            return el( RichText.Content, {
                tagName: 'p',
                value: props.attributes.content,
            } );
        },
    } );
} )( window.wp.blocks, window.wp.element, window.wp.editor );
