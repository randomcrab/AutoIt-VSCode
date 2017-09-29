var {
    CompletionItemKind
} = require('vscode')

var items = [{
        label: '$TCS_SCROLLOPPOSITE',
        documentation: 'Unneeded tabs scroll to the opposite side of the control when a tab is selected. ',
        detail: 'Tab Style Constant'
    },
    {
        label: '$TCS_BOTTOM',
        documentation: 'Tabs appear at the bottom of the control. This value equals TCS_RIGHT. This style is not supported if you use comctl32.dll version 6. ',
        detail: 'Tab Style Constant'
    },
    {
        label: '$TCS_RIGHT',
        documentation: 'Tabs appear vertically on the right side of controls that use the TCS_VERTICAL style. This value equals TCS_BOTTOM. This style is not supported if you use visual styles. ',
        detail: 'Tab Style Constant'
    },
    {
        label: '$TCS_MULTISELECT',
        documentation: 'Multiple tabs can be selected by holding down CTRL when clicking. This style must be used with the TCS_BUTTONS style. ',
        detail: 'Tab Style Constant'
    },
    {
        label: '$TCS_FLATBUTTONS',
        documentation: 'Selected tabs appear as being indented into the background while other tabs appear as being on the same plane as the background. This style only affects tab controls with the TCS_BUTTONS style. ',
        detail: 'Tab Style Constant'
    },
    {
        label: '$TCS_FORCEICONLEFT',
        documentation: 'Icons are aligned with the left edge of each fixed-width tab. This style can only be used with the TCS_FIXEDWIDTH style. ',
        detail: 'Tab Style Constant'
    },
    {
        label: '$TCS_FORCELABELLEFT',
        documentation: 'Labels are aligned with the left edge of each fixed-width tab; that is, the label is displayed immediately to the right of the icon instead of being centered.\n\nThis style can only be used with the TCS_FIXEDWIDTH style, and it implies the TCS_FORCEICONLEFT style.',
        detail: 'Tab Style Constant'
    },
    {
        label: '$TCS_HOTTRACK',
        documentation: 'Items under the pointer are automatically highlighted ',
        detail: 'Tab Style Constant'
    },
    {
        label: '$TCS_VERTICAL',
        documentation: 'Tabs appear at the left side of the control, with tab text displayed vertically. This style is valid only when used with the TCS_MULTILINE style. To make tabs appear on the right side of the control, also use the TCS_RIGHT style. This style is not supported if you use comctl32.dll version 6. ',
        detail: 'Tab Style Constant'
    },
    {
        label: '$TCS_TABS',
        documentation: 'Tabs appear as tabs, and a border is drawn around the display area. This style is the default. ',
        detail: 'Tab Style Constant'
    },
    {
        label: '$TCS_BUTTONS',
        documentation: 'Tabs appear as buttons, and no border is drawn around the display area. ',
        detail: 'Tab Style Constant'
    },
    {
        label: '$TCS_SINGLELINE',
        documentation: 'Only one row of tabs is displayed. The user can scroll to see more tabs, if necessary. This style is the default. ',
        detail: 'Tab Style Constant'
    },
    {
        label: '$TCS_MULTILINE',
        documentation: 'Multiple rows of tabs are displayed, if necessary, so all tabs are visible at once. ',
        detail: 'Tab Style Constant'
    },
    {
        label: '$TCS_RIGHTJUSTIFY',
        documentation: 'The width of each tab is increased, if necessary, so that each row of tabs fills the entire width of the tab control.\n\nThis window style is ignored unless the TCS_MULTILINE style is also specified.',
        detail: 'Tab Style Constant'
    },
    {
        label: '$TCS_FIXEDWIDTH',
        documentation: 'All tabs are the same width. This style cannot be combined with the TCS_RIGHTJUSTIFY style. ',
        detail: 'Tab Style Constant'
    },
    {
        label: '$TCS_RAGGEDRIGHT',
        documentation: 'Rows of tabs will not be stretched to fill the entire width of the control. This style is the default. ',
        detail: 'Tab Style Constant'
    },
    {
        label: '$TCS_FOCUSONBUTTONDOWN',
        documentation: 'The tab control receives the input focus when clicked. ',
        detail: 'Tab Style Constant'
    },
    {
        label: '$TCS_OWNERDRAWFIXED',
        documentation: 'The parent window is responsible for drawing tabs. ',
        detail: 'Tab Style Constant'
    },
    {
        label: '$TCS_TOOLTIPS',
        documentation: 'The tab control has a tooltip control associated with it. ',
        detail: 'Tab Style Constant'
    },
    {
        label: '$TCS_FOCUSNEVER',
        documentation: 'The tab control does not receive the input focus when clicked. ',
        detail: 'Tab Style Constant'
    },
]

// Add the icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Constant
    i.documentation += '\n\nRequires #include <TabConstants.au3>'
}

module.exports = items