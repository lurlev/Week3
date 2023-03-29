import { addPropertyControls, ControlType } from "framer"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"

const accentColor = "blue"

/**
 * @framerSupportedLayoutWidth any
 * @framerSupportedLayoutHeight any
 */

export default function Input2(props) {
    const {
        hasLabel,
        label,
        defaultVal,
        disabled,
        fieldType,
        placeholder,
        focusState,
        required,
        requiredText,
        classIsValid,
        feedback,
        onChange,
    } = props

    const email =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/
    const phone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im

    const [inputVal, setInputVal] = useState(defaultVal)
    const [validState, setValidState] = useState(classIsValid)
    const [isFocused, setFocused] = useState(focusState)
    const doesTransform =
        fieldType === "date" || fieldType === "time" ? false : true

    useEffect(() => {
        setInputVal(inputVal)
        setValidState(inputVal !== "" ? true : false)
        setFocused(isFocused)
    }, [inputVal, validState, isFocused, defaultVal])

    return (
        <motion.div
            style={{
                paddingLeft: 5,
                paddingTop: 10,
                backgroundColor: "#f5f5f5",
                position: "relative",
                height: hasLabel ? "56px" : "38px",
                display: "flex",
            }}
            animate={{
                borderBottomWidth: isFocused ? "2px" : "0px",
                borderBottomColor: isFocused
                    ? accentColor
                    : "rgba(0, 0, 0, 0.42)",
            }}
        >
            <motion.input
                type={fieldType}
                required
                defaultValue={inputVal}
                autoFocus={isFocused}
                onFocus={() => setFocused(true)}
                onBlur={() => {
                    setFocused(false)
                    setValidState(inputVal !== "" ? true : false)
                }}
                onChange={(e) => {
                    onChange && onChange(e)
                    setInputVal(e.target.value)
                    setValidState(inputVal !== "" ? true : false)
                }}
                style={{
                    background: "transparent",
                    flex: 1,
                    fontFamily: "Helvetica Regular, Arial",
                    caretColor: accentColor,
                    border: "1px solid transparent",
                    color: "#000",
                    transition: "border 500ms",
                    padding: hasLabel ? "12px 10px 5px" : "5px 10px",
                    fontSize: 16,
                    lineHeight: "20px",
                    outline: "none",
                }}
            />
            <motion.label
                style={{
                    display: "block",
                    width: "100%",
                    position: "absolute",
                    top: "50%",
                    left: 16,
                    transformOrigin: "left top",
                    userSelect: "none",
                    pointerEvents: "none",
                    color: "#000",
                    fontFamily: "Helvetica Medium, Arial",
                    fontSize: 16,
                    letterSpacing: 0.1,
                    lineHeight: "20px",
                }}
                initial={
                    doesTransform
                        ? isFocused || validState
                            ? {
                                  scale: 0.75,
                                  y: "-115%",
                                  color: accentColor,
                              }
                            : {
                                  scale: 1,
                                  y: "-50%",
                                  color: "#000",
                              }
                        : {
                              scale: 0.75,
                              top: "6px",
                              color: "#000",
                          }
                }
                animate={
                    doesTransform
                        ? isFocused || validState
                            ? {
                                  scale: 0.75,
                                  y: "-115%",
                                  color: accentColor,
                              }
                            : {
                                  scale: 1,
                                  y: "-50%",
                                  color: "#000",
                              }
                        : {
                              scale: 0.75,
                              top: "6px",
                              color: "#000",
                          }
                }
            >
                {label}
            </motion.label>
        </motion.div>
    )
}

/*
<MotionLabel
content={label}
color={isFocused ? accentColor : "#000"}
isFocused={isFocused}
validState={validState}
doesTransform={
// false
fieldType === "date" || fieldType === "time" ? false : true
}
/>
*/

addPropertyControls(Input2, {
    hasLabel: {
        title: "Has Label",
        type: ControlType.Boolean,
        defaultValue: true,
    },
    label: {
        title: "Label",
        type: ControlType.String,
        defaultValue: "Email address",
        hidden(props) {
            return props.hasLabel === false
        },
    },
    disabled: {
        title: "Disabled",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    onTap: {
        type: ControlType.EventHandler,
    },
    defaultVal: {
        title: "Default Value",
        type: ControlType.String,
        defaultValue: "",
    },
    classFormFloating: {
        title: "Floating Label",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    placeholder: {
        title: "Placeholder",
        type: ControlType.String,
        defaultValue: "Placeholder",
    },
    fieldType: {
        title: "Field Type",
        type: ControlType.Enum,
        options: [
            "text",
            "email",
            "password",
            "date",
            "time",
            "phone",
            "number",
            "file",
            "search",
        ],
        defaultValue: "text",
    },
    required: {
        title: "Required",
        type: ControlType.Boolean,
        defaultValue: true,
    },
    requiredText: {
        title: "Required Text",
        type: ControlType.String,
        defaultValue: "(requried)",
        hidden(props) {
            return props.required === false
        },
    },
    classIsValid: {
        title: "Valid",
        type: ControlType.Enum,
        options: ["", "is-valid", "is-invalid"],
        defaultValue: "",
    },
    feedback: {
        title: "Feedback",
        type: ControlType.String,
        defaultValue: "",
    },
    focusState: {
        title: "Auto focus",
        type: ControlType.Boolean,
        defaultValue: false,
    },
})