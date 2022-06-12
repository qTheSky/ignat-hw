import React, {useState} from 'react'
import SuperEditableSpan from './common/c4-SuperEditableSpan/SuperEditableSpan'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {restoreState, saveState} from './localStorage/localStorage'

function HW6() {
		const [value, setValue] = useState<string>('')

		const save = () => {
				saveState<string>('editable-span-value', value)
		}
		const restore = () => {
				setValue(restoreState('editable-span-value', ''))
		}

		return (
				<div>
						<div>
								<SuperEditableSpan
										value={value}
										onChangeText={setValue}
										spanProps={{children: value ? undefined : 'enter text...'}}
										spanClassName={'test'}
								/>
						</div>
						<SuperButton onClick={save}>save</SuperButton>
						<SuperButton onClick={restore}>restore</SuperButton>
						<hr/>
				</div>
		)
}

export default HW6
