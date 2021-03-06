﻿import view = require("ui/core/view");
import style = require("ui/styling/style");
import definition = require("ui/styling");
import stylersCommon = require("ui/styling/stylers-common");
import enums = require("ui/enums");
import font = require("ui/styling/font");

// merge the exports of the common file with the exports of this file
declare var exports;
require("utils/module-merge").merge(stylersCommon, exports);

interface TextUIView {
    font: UIFont;
    textAlignment: number;
    textColor: UIColor;
}

export class DefaultStyler implements definition.stylers.Styler {
    //Background methods
    private static setBackgroundProperty(view: view.View, newValue: any) {
        var nativeView: UIView = <UIView>view._nativeView;
        if (nativeView) {
            nativeView.backgroundColor = newValue;
        }
    }

    private static resetBackgroundProperty(view: view.View, nativeValue: any) {
        var nativeView: UIView = <UIView>view._nativeView;
        if (nativeView) {
            nativeView.backgroundColor = nativeValue;
        }
    }

    private static getNativeBackgroundValue(view: view.View): any {
        var nativeView: UIView = <UIView>view._nativeView;
        if (nativeView) {
            return nativeView.backgroundColor;
        }
        return undefined;
    }

    //Background image methods
    private static setBackgroundImageSourceProperty(view: view.View, newValue: any) {
        var nativeView: UIView = <UIView>view._nativeView;
        if (nativeView) {
            nativeView.backgroundColor = UIColor.alloc().initWithPatternImage(newValue);
        }
    }

    private static resetBackgroundImageSourceProperty(view: view.View, nativeValue: any) {
        var nativeView: UIView = <UIView>view._nativeView;
        if (nativeView) {
            nativeView.backgroundColor = nativeValue;
        }
    }

    private static getNativeBackgroundImageSourceValue(view: view.View): any {
        var nativeView: UIView = <UIView>view._nativeView;
        if (nativeView) {
            return nativeView.backgroundColor;
        }
        return undefined;
    }

    //Visibility methods
    private static setVisibilityProperty(view: view.View, newValue: any) {
        var nativeView: UIView = <UIView>view._nativeView;
        if (nativeView) {
            return nativeView.hidden = (newValue !== enums.Visibility.visible);
        }
    }

    private static resetVisibilityProperty(view: view.View, nativeValue: any) {
        var nativeView: UIView = <UIView>view._nativeView;
        if (nativeView) {
            return nativeView.hidden = false;
        }
    }

    //Opacity methods
    private static setOpacityProperty(view: view.View, newValue: any) {
        var nativeView: UIView = <UIView>view._nativeView;
        if (nativeView) {
            return nativeView.alpha = newValue;
        }
    }

    private static resetOpacityProperty(view: view.View, nativeValue: any) {
        var nativeView: UIView = <UIView>view._nativeView;
        if (nativeView) {
            return nativeView.alpha = 1.0;
        }
    }

    //Border width methods
    private static setBorderWidthProperty(view: view.View, newValue: any) {
        if (view._nativeView instanceof UIView) {
            (<UIView>view._nativeView).layer.borderWidth = newValue;
        }
    }

    private static resetBorderWidthProperty(view: view.View, nativeValue: any) {
        if (view._nativeView instanceof UIView) {
            (<UIView>view._nativeView).layer.borderWidth = nativeValue;
        }
    }

    //Border color methods
    private static setBorderColorProperty(view: view.View, newValue: any) {
        if (view._nativeView instanceof UIView && newValue instanceof UIColor) {
            (<UIView>view._nativeView).layer.borderColor = (<UIColor>newValue).CGColor;
        }
    }

    private static resetBorderColorProperty(view: view.View, nativeValue: any) {
        if (view._nativeView instanceof UIView && nativeValue instanceof UIColor) {
            (<UIView>view._nativeView).layer.borderColor = (<UIColor>nativeValue).CGColor;
        }
    }

    //Border radius methods
    private static setBorderRadiusProperty(view: view.View, newValue: any) {
        if (view._nativeView instanceof UIView) {
            (<UIView>view._nativeView).layer.cornerRadius = newValue;
        }
    }

    private static resetBorderRadiusProperty(view: view.View, nativeValue: any) {
        if (view._nativeView instanceof UIView) {
            (<UIView>view._nativeView).layer.cornerRadius = nativeValue;
        }
    }

    public static registerHandlers() {
        style.registerHandler(style.backgroundColorProperty, new stylersCommon.StylePropertyChangedHandler(
            DefaultStyler.setBackgroundProperty,
            DefaultStyler.resetBackgroundProperty,
            DefaultStyler.getNativeBackgroundValue));

        style.registerHandler(style.backgroundImageSourceProperty, new stylersCommon.StylePropertyChangedHandler(
            DefaultStyler.setBackgroundImageSourceProperty,
            DefaultStyler.resetBackgroundImageSourceProperty,
            DefaultStyler.getNativeBackgroundImageSourceValue));

        style.registerHandler(style.visibilityProperty, new stylersCommon.StylePropertyChangedHandler(
            DefaultStyler.setVisibilityProperty,
            DefaultStyler.resetVisibilityProperty));

        style.registerHandler(style.opacityProperty, new stylersCommon.StylePropertyChangedHandler(
            DefaultStyler.setOpacityProperty,
            DefaultStyler.resetOpacityProperty));

        style.registerHandler(style.borderWidthProperty, new stylersCommon.StylePropertyChangedHandler(
            DefaultStyler.setBorderWidthProperty,
            DefaultStyler.resetBorderWidthProperty));

        style.registerHandler(style.borderColorProperty, new stylersCommon.StylePropertyChangedHandler(
            DefaultStyler.setBorderColorProperty,
            DefaultStyler.resetBorderColorProperty));

        style.registerHandler(style.borderRadiusProperty, new stylersCommon.StylePropertyChangedHandler(
            DefaultStyler.setBorderRadiusProperty,
            DefaultStyler.resetBorderRadiusProperty));
    }
}

export class ButtonStyler implements definition.stylers.Styler {
    // color
    private static setColorProperty(view: view.View, newValue: any) {
        var btn: UIButton = <UIButton>view._nativeView;
        btn.setTitleColorForState(newValue, UIControlState.UIControlStateNormal);
    }

    private static resetColorProperty(view: view.View, nativeValue: any) {
        var btn: UIButton = <UIButton>view._nativeView;
        btn.setTitleColorForState(nativeValue, UIControlState.UIControlStateNormal);
    }

    private static getNativeColorValue(view: view.View): any {
        var btn: UIButton = <UIButton>view._nativeView;
        return btn.titleColorForState(UIControlState.UIControlStateNormal);
    }

    // font
    private static setFontInternalProperty(view: view.View, newValue: any, nativeValue: any) {
        var btn: UIButton = <UIButton>view._nativeView;
        btn.titleLabel.font = (<font.Font>newValue).getUIFont(nativeValue);
    }

    private static resetFontInternalProperty(view: view.View, nativeValue: any) {
        var btn: UIButton = <UIButton>view._nativeView;
        btn.titleLabel.font = nativeValue;
    }

    private static getNativeFontInternalValue(view: view.View): any {
        var btn: UIButton = <UIButton>view._nativeView;
        return btn.titleLabel.font;
    }

    // text-align
    private static setTextAlignmentProperty(view: view.View, newValue: any) {
        var btn: UIButton = <UIButton>view._nativeView;
        setTextAlignment(btn.titleLabel, newValue);

        // Also set the contentHorizontalAlignment
        switch (newValue) {
            case enums.TextAlignment.left:
                btn.contentHorizontalAlignment = UIControlContentHorizontalAlignment.UIControlContentHorizontalAlignmentLeft;
                break;
            case enums.TextAlignment.center:
                btn.contentHorizontalAlignment = UIControlContentHorizontalAlignment.UIControlContentHorizontalAlignmentCenter;
                break;
            case enums.TextAlignment.right:
                btn.contentHorizontalAlignment = UIControlContentHorizontalAlignment.UIControlContentHorizontalAlignmentRight;
                break;
            default:
                break;
        }
    }

    private static resetTextAlignmentProperty(view: view.View, nativeValue: any) {
        var btn: UIButton = <UIButton>view._nativeView;
        btn.titleLabel.textAlignment = nativeValue.textAlign;
        btn.contentHorizontalAlignment = nativeValue.contentAlign;
    }

    private static getNativeTextAlignmentValue(view: view.View): any {
        var btn: UIButton = <UIButton>view._nativeView;
        return {
            textAlign: btn.titleLabel.textAlignment,
            contentAlign: btn.contentHorizontalAlignment
        }
    }

    public static registerHandlers() {
        style.registerHandler(style.colorProperty, new stylersCommon.StylePropertyChangedHandler(
            ButtonStyler.setColorProperty,
            ButtonStyler.resetColorProperty,
            ButtonStyler.getNativeColorValue), "Button");

        style.registerHandler(style.fontInternalProperty, new stylersCommon.StylePropertyChangedHandler(
            ButtonStyler.setFontInternalProperty,
            ButtonStyler.resetFontInternalProperty,
            ButtonStyler.getNativeFontInternalValue), "Button");

        style.registerHandler(style.textAlignmentProperty, new stylersCommon.StylePropertyChangedHandler(
            ButtonStyler.setTextAlignmentProperty,
            ButtonStyler.resetTextAlignmentProperty,
            ButtonStyler.getNativeTextAlignmentValue), "Button");
    }
}

export class TextBaseStyler implements definition.stylers.Styler {
    // font
    private static setFontInternalProperty(view: view.View, newValue: any, nativeValue: any) {
        var ios: TextUIView = <TextUIView>view._nativeView;
        ios.font = (<font.Font>newValue).getUIFont(nativeValue);
    }

    private static resetFontInternalProperty(view: view.View, nativeValue: any) {
        var ios: TextUIView = <TextUIView>view._nativeView;
        ios.font = nativeValue;
    }

    private static getNativeFontInternalValue(view: view.View): any {
        var ios: TextUIView = <TextUIView>view._nativeView;
        return ios.font;
    }

    // text-align
    private static setTextAlignmentProperty(view: view.View, newValue: any) {
        setTextAlignment(view._nativeView, newValue);
    }

    private static resetTextAlignmentProperty(view: view.View, nativeValue: any) {
        var ios: TextUIView = <TextUIView>view._nativeView;
        ios.textAlignment = nativeValue;
    }

    private static getNativeTextAlignmentValue(view: view.View): any {
        var ios: TextUIView = <TextUIView>view._nativeView;
        return ios.textAlignment;
    }

    // color
    private static setColorProperty(view: view.View, newValue: any) {
        var ios: TextUIView = <TextUIView>view._nativeView;
        ios.textColor = newValue;
    }

    private static resetColorProperty(view: view.View, nativeValue: any) {
        var ios: TextUIView = <TextUIView>view._nativeView;
        ios.textColor = nativeValue;
    }

    private static getNativeColorValue(view: view.View): any {
        var ios: TextUIView = <TextUIView>view._nativeView;
        return ios.textColor;
    }

    public static registerHandlers() {
        style.registerHandler(style.fontInternalProperty, new stylersCommon.StylePropertyChangedHandler(
            TextBaseStyler.setFontInternalProperty,
            TextBaseStyler.resetFontInternalProperty,
            TextBaseStyler.getNativeFontInternalValue), "TextBase");

        style.registerHandler(style.textAlignmentProperty, new stylersCommon.StylePropertyChangedHandler(
            TextBaseStyler.setTextAlignmentProperty,
            TextBaseStyler.resetTextAlignmentProperty,
            TextBaseStyler.getNativeTextAlignmentValue), "TextBase");

        style.registerHandler(style.colorProperty, new stylersCommon.StylePropertyChangedHandler(
            TextBaseStyler.setColorProperty,
            TextBaseStyler.resetColorProperty,
            TextBaseStyler.getNativeColorValue), "TextBase");
    }
}

export class TextViewStyler implements definition.stylers.Styler {
    // Color methods
    private static setColorProperty(view: view.View, newValue: any) {
        var textView: UITextView = <UITextView>view._nativeView;
        TextViewStyler._setTextViewColor(textView, newValue);
    }

    private static resetColorProperty(view: view.View, nativeValue: any) {
        var textView: UITextView = <UITextView>view._nativeView;
        TextViewStyler._setTextViewColor(textView, nativeValue);
    }

    private static _setTextViewColor(textView: UITextView, newValue: any) {
        var color: UIColor = <UIColor>newValue;
        if ((<any>textView).isShowingHint && color) {
            textView.textColor = (<UIColor>color).colorWithAlphaComponent(0.22);
        }
        else {
            textView.textColor = color;
        }
    }

    private static getNativeColorValue(view: view.View): any {
        var textView: UITextView = <UITextView>view._nativeView;
        if ((<any>textView).isShowingHint && textView.textColor) {
            return textView.textColor.colorWithAlphaComponent(1);
        }
        else {
            return textView.textColor;
        }
    }

    public static registerHandlers() {
        style.registerHandler(style.colorProperty, new stylersCommon.StylePropertyChangedHandler(
            TextViewStyler.setColorProperty,
            TextViewStyler.resetColorProperty,
            TextViewStyler.getNativeColorValue), "TextView");
    }
}

export class SegmentedBarStyler implements definition.stylers.Styler {
    //Text color methods
    private static setColorProperty(view: view.View, newValue: any) {
        var bar = <UISegmentedControl>view.ios;
        var attrs = NSMutableDictionary.new();
        attrs.setValueForKey(newValue, NSForegroundColorAttributeName);
        bar.setTitleTextAttributesForState(attrs, UIControlState.UIControlStateNormal);
    }

    private static resetColorProperty(view: view.View, nativeValue: any) {
        var bar = <UISegmentedControl>view.ios;
        var attrs = NSMutableDictionary.new();
        attrs.setValueForKey(nativeValue, NSForegroundColorAttributeName);
        bar.setTitleTextAttributesForState(attrs, UIControlState.UIControlStateNormal);
    }

    public static registerHandlers() {
        style.registerHandler(style.colorProperty, new stylersCommon.StylePropertyChangedHandler(
            SegmentedBarStyler.setColorProperty,
            SegmentedBarStyler.resetColorProperty), "SegmentedBar");
    }
}

export class SearchBarStyler implements definition.stylers.Styler {

    private static setBackgroundColorProperty(view: view.View, newValue: any) {
        var bar = <UISearchBar>view.ios;
        bar.barTintColor = newValue;
    }

    private static getBackgroundColorProperty(view: view.View): any {
        var bar = <UISearchBar>view.ios;
        return bar.barTintColor;
    }

    private static resetBackgroundColorProperty(view: view.View, nativeValue: any) {
        var bar = <UISearchBar>view.ios;
        bar.barTintColor = nativeValue;
    }

    private static getColorProperty(view: view.View): any {
        var bar = <UISearchBar>view.ios;

        var sf = <UITextField>bar.valueForKey("_searchField");
        if (sf) {
            return sf.textColor;
        }

        return undefined;
    }

    private static setColorProperty(view: view.View, newValue: any) {
        var bar = <UISearchBar>view.ios;

        var sf = <UITextField>bar.valueForKey("_searchField");
        if (sf) {
            sf.textColor = newValue;
        }
    }

    private static resetColorProperty(view: view.View, nativeValue: any) {
        var bar = <UISearchBar>view.ios;

        var sf = <UITextField>bar.valueForKey("_searchField");
        if (sf) {
            sf.textColor = nativeValue;
        }
    }

    public static registerHandlers() {
        style.registerHandler(style.backgroundColorProperty, new stylersCommon.StylePropertyChangedHandler(
            SearchBarStyler.setBackgroundColorProperty,
            SearchBarStyler.resetBackgroundColorProperty,
            SearchBarStyler.getBackgroundColorProperty), "SearchBar");

        style.registerHandler(style.colorProperty, new stylersCommon.StylePropertyChangedHandler(
            SearchBarStyler.setColorProperty,
            SearchBarStyler.resetColorProperty,
            SearchBarStyler.getColorProperty), "SearchBar");
    }
}

function setTextAlignment(view: TextUIView, value: string) {
    switch (value) {
        case enums.TextAlignment.left:
            view.textAlignment = NSTextAlignment.NSTextAlignmentLeft;
            break;
        case enums.TextAlignment.center:
            view.textAlignment = NSTextAlignment.NSTextAlignmentCenter;
            break;
        case enums.TextAlignment.right:
            view.textAlignment = NSTextAlignment.NSTextAlignmentRight;
            break;
        default:
            break;
    }
}

// Register all styler at the end.
export function _registerDefaultStylers() {
    style.registerNoStylingClass("Frame");
    DefaultStyler.registerHandlers();
    TextBaseStyler.registerHandlers();
    ButtonStyler.registerHandlers();
    TextViewStyler.registerHandlers();
    SegmentedBarStyler.registerHandlers();
    SearchBarStyler.registerHandlers();
}