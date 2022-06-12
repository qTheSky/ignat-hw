import React, {useState} from 'react'
import SuperSelect from './common/c5-SuperSelect/SuperSelect'
import SuperRadio from './common/c6-SuperRadio/SuperRadio'

const arr = ['1', '2', '3', '4', '5', '6']

function HW7() {
		const [value, onChangeOption] = useState(arr[1])

		return (
				<div>
						<div>
								<SuperSelect
										options={arr}
										value={value}
										onChangeOption={onChangeOption}
								/>
						</div>
						<div>
								<SuperRadio
										name={'radio'}
										options={arr}
										value={value}
										onChangeOption={onChangeOption}
								/>
						</div>
						<hr/>
				</div>
		)
}

export default HW7
