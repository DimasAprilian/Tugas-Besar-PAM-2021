import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  App: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingHorizontal: 24,
    paddingVertical: 24,
  },
  Title: {
    marginVertical: 24,
    color: '#F39C12',
    fontWeight: '600',
    fontSize: 28,
    textAlign: 'center',
  },
  Button: {
    paddingHorizontal: 16,
  },
  TaskInput: {
    marginTop: 16,
    paddingHorizontal: 14,
    paddingVertical: 12,
    backgroundColor: '#FFF',
    borderColor: '#F39C12',
    fontSize: 16,
    borderRadius: 8,
    borderWidth: 1,
    width: '100%',
    color: '#4A4A4A',
  },
  TaskList_Empty: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  TaskList_EmptyText: {
    fontSize: 24,
    color: '#DDD'
  },
  TaskListItem: {
    backgroundColor: '#F39C12',
    fontSize: 16,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    minHeight: 50,
    paddingVertical: 10
  },
  TaskListItem_TextContainer: {
    flex: 1
  },
  TaskListItem_Text: {
    color: '#4A4A4A',
    fontSize: 16
  },
  TaskListItem_Checked: {
    color: '#9B9B9B',
    textDecorationLine: 'line-through'
  }
});

export default styles;