'use strict';

exports.__esModule = true;
exports.default = MockWebsite;

var _preact = require('preact');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Container = _styledComponents2.default.div.withConfig({
    displayName: 'MockWebsite__Container'
})(['max-height:90vh;overflow-y:scroll;']),
    Nav = _styledComponents2.default.nav.withConfig({
    displayName: 'MockWebsite__Nav'
})(['background-color:#f8f8f8;border-color:#e7e7e7;display:flex;flex-direction:row;']),
    Header = _styledComponents2.default.div.withConfig({
    displayName: 'MockWebsite__Header'
})(['width:100px;margin:0 16px;']),
    NavItems = _styledComponents2.default.div.withConfig({
    displayName: 'MockWebsite__NavItems'
})(['display:flex;flex-direction:row;justify-content:space-between;width:100%;margin-right:16px;']),
    NavItem = _styledComponents2.default.div.withConfig({
    displayName: 'MockWebsite__NavItem'
})(['padding:15px;']),
    ImageContainer = _styledComponents2.default.div.withConfig({
    displayName: 'MockWebsite__ImageContainer'
})(['display:flex;padding:10px;']),
    HeaderImg = _styledComponents2.default.img.withConfig({
    displayName: 'MockWebsite__HeaderImg'
})(['width:100%;']),
    Content = _styledComponents2.default.div.withConfig({
    displayName: 'MockWebsite__Content'
})(['display:flex;flex-direction:column;padding:10px;']),
    Title = _styledComponents2.default.div.withConfig({
    displayName: 'MockWebsite__Title'
})(['text-align:center;font-size:28px;margin-top:20px;margin-bottom:10px;']);

function MockWebsite(props) {
    var translations = props.translations,
        brandLogo = props.brandLogo,
        ahaForm = props.ahaForm;

    return (0, _preact.h)(
        Container,
        null,
        (0, _preact.h)(
            Nav,
            null,
            (0, _preact.h)(
                Header,
                null,
                (0, _preact.h)(HeaderImg, { src: brandLogo })
            ),
            (0, _preact.h)(
                NavItems,
                null,
                (0, _preact.h)(
                    NavItem,
                    null,
                    (0, _preact.h)(
                        'a',
                        { href: '' },
                        translations.getLL('HOME', 'Home')
                    )
                ),
                (0, _preact.h)(
                    NavItem,
                    null,
                    (0, _preact.h)(
                        'a',
                        { href: '' },
                        translations.getLL('SERVICES', 'Services')
                    )
                ),
                (0, _preact.h)(
                    NavItem,
                    null,
                    (0, _preact.h)(
                        'a',
                        { href: '' },
                        translations.getLL('ABOUT', 'About')
                    )
                ),
                (0, _preact.h)(
                    NavItem,
                    null,
                    (0, _preact.h)(
                        'a',
                        { href: '' },
                        translations.getLL('BLOG', 'Blog')
                    )
                ),
                (0, _preact.h)(
                    NavItem,
                    null,
                    (0, _preact.h)(
                        'a',
                        { href: '' },
                        translations.getLL('CONTACT', 'Contact')
                    )
                )
            )
        ),
        (0, _preact.h)(
            Content,
            null,
            (0, _preact.h)(
                Title,
                null,
                ahaForm.aha_form_entrys_paginatitel
            ),
            (0, _preact.h)(
                ImageContainer,
                null,
                (0, _preact.h)(HeaderImg, { src: ahaForm.aha_form_entrys_lpbeeld })
            ),
            (0, _preact.h)(
                'p',
                null,
                (0, _preact.h)('div', { dangerouslySetInnerHTML: { __html: ahaForm.aha_form_entrys_lpbodytekst } })
            )
        )
    );
}