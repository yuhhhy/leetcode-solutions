// Problem: https://leetcode.cn/problems/add-two-numbers/
// Accepted at: 2024年5月3日 21:25

/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
struct ListNode* addTwoNumbers(struct ListNode* l1, struct ListNode* l2) {

    int length = 1;
    int len1, len2 = 1;
    struct ListNode* temp1 = l1;
    struct ListNode* temp2 = l2;
    // 计算最终链表长度
    while (temp1->next != NULL || temp2->next != NULL) {
        length++;
        if (temp1->next != NULL) {
            temp1 = temp1->next;
            len1++;
        }
        if (temp2->next != NULL) {
            temp2 = temp2->next;
            len2++;
        }
    }
    if (len1 == len2 && temp1->val + temp2->val > 9) {
        length++;
    }

    // 初始化链表
    struct ListNode* list = (struct ListNode*)malloc(sizeof(struct ListNode));
    struct ListNode* temp = list;
    for (int i = 0; i < length - 1; i++) {
        temp->next = (struct ListNode*)malloc(sizeof(struct ListNode));
        temp = temp->next;
    }
    temp->next = NULL;

    // 为链表赋值
    temp1 = l1;
    temp2 = l2;
    int add = 0;
    struct ListNode* firstNode = list;
    while (temp1 != NULL || temp2 != NULL || list != NULL) {
        // 两个都没加完
        if (temp1 != NULL && temp2 != NULL) {
            list->val = temp1->val + temp2->val + add;
            if (list->val > 9) {
                list->val -= 10;
                add = 1;
            } else
                add = 0;
        }

        // temp1加完,temp2未完
        else if (temp2 != NULL && temp1 == NULL) {
            list->val = temp2->val + add;
            if (list->val > 9) {
                list->val -= 10;
                add = 1;
            } else
                add = 0;
        }
        // temp2加完，temp1未完
        else if (temp1 != NULL && temp2 == NULL) {
            list->val = temp1->val + add;
            if (list->val > 9) {
                list->val -= 10;
                add = 1;
            } else
                add = 0;
            // temp1,temp2都加完
        }
        if (list != NULL)
            list = list->next;
        if (temp1 != NULL)
            temp1 = temp1->next;
        if (temp2 != NULL)
            temp2 = temp2->next;
    }

    if (add != 0) {
        temp=firstNode;
        while (temp->next!=NULL) {
        temp = temp->next;
    }
        temp->next= (struct ListNode*)malloc(sizeof(struct ListNode));
        temp->next->val = 1;
        temp->next->next = NULL;
        add = 0;
    }

    return firstNode;
}
